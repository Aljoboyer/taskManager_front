
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
   
]