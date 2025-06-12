import { List, Datagrid, TextField, ReferenceField } from 'react-admin';

const PostList = () => (
    <List resource="posts">
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" label="Post Title"/>
            <TextField source="body" />
            <ReferenceField source="userId" reference="users"/>
        </Datagrid>
    </List>
);

export default PostList;


