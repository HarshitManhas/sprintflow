import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TaskCard from "./TaskCard";
import { Column } from "./KanbanBoard";

interface KanbanColumnProps {
  column: Column;
}

const KanbanColumn = ({ column }: KanbanColumnProps) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <Card className="h-fit">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">{column.title}</h3>
          <Badge variant="secondary" className="text-xs">
            {column.tasks.length}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div ref={setNodeRef} className="space-y-3 min-h-[200px] pb-4">
          <SortableContext
            items={column.tasks.map((task) => task.id)}
            strategy={verticalListSortingStrategy}
          >
            {column.tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </SortableContext>
        </div>
      </CardContent>
    </Card>
  );
};

export default KanbanColumn;
