import React, { type FC } from "react";
import { FiTrash2, FiEdit3, FiEye } from "react-icons/fi";
import AppText from "../shared/Texts/AppText";

export interface TaskCardProps {
  title: string;
  description: string;
  status: "Pending" | "In-progress" | "Completed";
  priority: "low" | "medium" | "high";
  due_date?: string | null;
  created_at: string;
  onDelete: () => void;
  onEdit: () => void;
  onView: () => void;
}

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-700",
  "In-progress": "bg-blueOverlay text-bluemain",
  Completed: "bg-successOverlay text-greenMain",
};

const priorityColors = {
  low: "bg-gray-100 text-gray-700",
  medium: "bg-orange-100 text-orange-700",
  high: "bg-red-100 text-red-700",
};

const TaskCard: FC<TaskCardProps> = ({
  title,
  description,
  status,
  priority,
  due_date,
  created_at,
  onDelete,
  onEdit,
  onView,
}) => {
  return (
    <div className="w-full p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-start justify-between">
            <AppText
            type="title_sm"
            text={title}
            otherStyle='mb-4 text-black'
            />

        <span className={`px-2 py-1 text-xs font-medium rounded-md ${statusColors[status]}`}>
          {status}
        </span>
      </div>

      {/* Description */}
      <div className="">
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{description}</p>
      </div>

      {/* Details */}
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 text-xs rounded-md font-medium ${priorityColors[priority]}`}>
            Priority: {priority}
          </span>
        </div>

        <div className="text-right">
          <span className="font-medium text-gray-500">Created:</span>  
          <span className="ml-1">{new Date(created_at).toLocaleDateString()}</span>
        </div>

        {due_date && (
          <div className="col-span-2 text-left">
            <span className="font-medium text-gray-500">Due:</span>{" "}
            <span>{new Date(due_date).toLocaleDateString()}</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-5 flex justify-end gap-3">
        <button
          onClick={onView}
          className="p-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
          title="View Details"
        >
          <FiEye size={18} />
        </button>

        <button
          onClick={onEdit}
          className="p-2 rounded-md hover:bg-blue-100 text-blue-600 transition cursor-pointer"
          title="Edit Task"
        >
          <FiEdit3 size={18} />
        </button>

        <button
          onClick={onDelete}
          className="p-2 rounded-md hover:bg-red-100 text-red-600 transition cursor-pointer"
          title="Delete Task"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;