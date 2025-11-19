
export const taskFormFields =  [
    {
        field_id: 'title',
        label: 'Title',
        placeholder: 'Enter Task Title',
        required:{
            required: 'Enter Task Title',
            pattern: {
                message: "Enter Task Title",
            }
        },
        inputType: 'textfield'
    },
    {
        field_id: 'description',
        label: 'Description',
        inputType: 'textarea',
        placeholder: 'Write Task Description...',
        required:{
            required: 'Enter Task Description',
        },
    },
    {
        field_id: 'status',
        options: [
            {value: 'pending', label: 'Pending'},
            {value: 'in-progress', label: 'In-progress'},
            {value: 'completed', label: 'completed'},
        ],
        label: 'Status',
        placeholder: 'Select Status',
        required:{
            required: 'Select Status',
        },
        inputType: 'select',
        value: ""
    },
    {
        field_id: 'priority',
        options: [
            {value: 'low', label: 'Low'},
            {value: 'medium', label: 'Medium'},
            {value: 'high', label: 'High'},
        ],
        label: 'Priority',
        placeholder: 'Select Status',
        required:{
            required: 'Select Status',
        },
        inputType: 'select',
        value: ""
    },
    {
        field_id: 'due_date',
        label: 'Due Date',
        placeholder: 'Enter Due Date',
        required:{
            required: 'Enter Due Date',
            pattern: {
                message: "Enter Due Date",
            }
        },
        inputType: 'date'
    },
]