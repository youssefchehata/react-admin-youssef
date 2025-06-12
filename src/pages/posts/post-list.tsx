import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    FunctionField,
    useRecordContext,
    TextInput,
    ReferenceInput
} from "react-admin";

const PostFilters = [
<TextInput source="q" label="Search" alwaysOn />,
<ReferenceInput source="userId" label="User" reference="users"/>,

]
const PostPanel = () => {
    const record = useRecordContext();
    return <div>{record?.body}</div>;
};

const PostList = () => {
        return(
    <List filters={PostFilters} >
        <Datagrid
            expand={<PostPanel />}
            sx={{ ".RaDatagrid-headerCell": { padding: "16px", }, }}
        >
            <TextField source="id" />
            <TextField source="title" label="Post Title" />
            {/* <TextField source="body" /> */}
            <FunctionField
                label="Excerpt"
                render={(record) => `${record.body?.substring(0, 50)}...`}
            />
            <ReferenceField source="userId" reference="users"> <TextField source="name" /> </ReferenceField>
        </Datagrid>
    </List>
);
}


export default PostList;
