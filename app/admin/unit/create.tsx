import { SimpleForm, Create, TextInput, required, ReferenceInput, NumberInput } from "react-admin";

export const UnitCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput
                    source="title"
                    validate={[required()]}
                    label="Title"
                />
                <TextInput
                    source="description"
                    validate={[required()]}
                    label="Description"
                />
                <ReferenceInput 
                    source="courseId"
                    reference="courses"
                />
                <NumberInput
                    source="order"
                    validate={[required()]}
                    label="Order"
                />
            </SimpleForm>
        </Create>
    );
};