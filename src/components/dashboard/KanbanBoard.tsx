import { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import KanbanColumn from "./KanbanColumn";
import TaskCard from "./TaskCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  assignee: string;
  dueDate: string;
  tags: string[];
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
  color: string;
}

const initialColumns: Column[] = [
  {
    id: "todo",
    title: "To Do",
    color: "bg-gray-100",
    tasks: [
      {
        id: "1",
        title: "Design user authentication flow",
        description: "Create wireframes and mockups for login/signup process",
        priority: "high",
        assignee: "Sarah Johnson",
        dueDate: "2024-01-15",
        tags: ["design", "ux"],
      },
      {
        id: "2",
        title: "Set up project repository",
        description: "Initialize Git repo with proper folder structure",
        priority: "medium",
        assignee: "Mike Chen",
        dueDate: "2024-01-12",
        tags: ["setup", "dev"],
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    color: "bg-brand-blue-light",
    tasks: [
      {
        id: "3",
        title: "Implement API endpoints",
        description: "Create REST API for user management and data handling",
        priority: "high",
        assignee: "Alex Rodriguez",
        dueDate: "2024-01-18",
        tags: ["backend", "api"],
      },
      {
        id: "4",
        title: "Create responsive navigation",
        description: "Build mobile-friendly navigation component",
        priority: "medium",
        assignee: "Emma Wilson",
        dueDate: "2024-01-16",
        tags: ["frontend", "responsive"],
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    color: "bg-amber-50",
    tasks: [
      {
        id: "5",
        title: "Database schema design",
        description: "Review and finalize database structure",
        priority: "high",
        assignee: "David Kim",
        dueDate: "2024-01-14",
        tags: ["database", "architecture"],
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    color: "bg-emerald-50",
    tasks: [
      {
        id: "6",
        title: "Project planning session",
        description: "Define project scope and timeline",
        priority: "low",
        assignee: "Team Lead",
        dueDate: "2024-01-10",
        tags: ["planning", "meeting"],
      },
    ],
  },
];

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const task = findTaskById(active.id as string);
    setActiveTask(task);
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    const activeTask = findTaskById(activeId);
    const overTask = findTaskById(overId);

    if (!activeTask) return;

    const activeColumn = findColumnByTaskId(activeId);
    const overColumn = findColumnByTaskId(overId) || findColumnById(overId);

    if (!activeColumn || !overColumn) return;
    if (activeColumn.id === overColumn.id) return;

    setColumns((columns) => {
      const activeItems = activeColumn.tasks;
      const overItems = overColumn.tasks;

      const activeIndex = activeItems.findIndex((task) => task.id === activeId);
      const overIndex = overTask
        ? overItems.findIndex((task) => task.id === overId)
        : overItems.length;

      return columns.map((column) => {
        if (column.id === activeColumn.id) {
          return {
            ...column,
            tasks: activeItems.filter((task) => task.id !== activeId),
          };
        } else if (column.id === overColumn.id) {
          const newTasks = [...overItems];
          newTasks.splice(overIndex, 0, activeTask);
          return {
            ...column,
            tasks: newTasks,
          };
        }
        return column;
      });
    });
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    const activeColumn = findColumnByTaskId(activeId);
    const overColumn = findColumnByTaskId(overId) || findColumnById(overId);

    if (!activeColumn || !overColumn) return;
    if (activeColumn.id !== overColumn.id) return;

    const activeIndex = activeColumn.tasks.findIndex(
      (task) => task.id === activeId
    );
    const overIndex = activeColumn.tasks.findIndex(
      (task) => task.id === overId
    );

    if (activeIndex !== overIndex) {
      setColumns((columns) =>
        columns.map((column) => {
          if (column.id === activeColumn.id) {
            return {
              ...column,
              tasks: arrayMove(column.tasks, activeIndex, overIndex),
            };
          }
          return column;
        })
      );
    }
  }

  function findTaskById(id: string): Task | undefined {
    for (const column of columns) {
      const task = column.tasks.find((task) => task.id === id);
      if (task) return task;
    }
  }

  function findColumnByTaskId(taskId: string): Column | undefined {
    return columns.find((column) =>
      column.tasks.some((task) => task.id === taskId)
    );
  }

  function findColumnById(id: string): Column | undefined {
    return columns.find((column) => column.id === id);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Sprint Board</h2>
        <Button className="bg-brand-blue hover:bg-brand-blue/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>

      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SortableContext items={columns.map((col) => col.id)}>
            {columns.map((column) => (
              <KanbanColumn key={column.id} column={column} />
            ))}
          </SortableContext>
        </div>

        {createPortal(
          <DragOverlay>
            {activeTask ? <TaskCard task={activeTask} isDragging /> : null}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );
};

export default KanbanBoard;
