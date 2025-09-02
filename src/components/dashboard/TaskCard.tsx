import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, GripVertical } from "lucide-react";
import { Task } from "./KanbanBoard";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  task: Task;
  isDragging?: boolean;
}

const TaskCard = ({ task, isDragging = false }: TaskCardProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({
    id: task.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={cn(
        "cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow",
        (isDragging || isSortableDragging) && "opacity-50 rotate-3 shadow-lg"
      )}
      {...attributes}
      {...listeners}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <h4 className="font-medium text-gray-900 text-sm leading-tight">
            {task.title}
          </h4>
          <GripVertical className="h-4 w-4 text-gray-400 flex-shrink-0 ml-2" />
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {task.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {task.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-xs px-2 py-0.5 bg-surface-50"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarFallback className="text-xs">
                {getInitials(task.assignee)}
              </AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">
              {task.assignee}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Badge
              className={cn(
                "text-xs px-2 py-0.5",
                getPriorityColor(task.priority)
              )}
            >
              {task.priority}
            </Badge>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              {new Date(task.dueDate).toLocaleDateString()}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
