import {
    Admin,
    Resource,
    //  ListGuesser, ShowGuesser,EditGuesser
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import PostList from "./pages//posts/post-list";
import PostShow from "./pages//posts/post-show";
import UserList from "./pages/users/user-list";
import PostEdit from "./pages/posts/post-edit";
import PostCreate from "./pages/posts/post-create";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";



export const App = () => (
    <Admin layout={Layout} dataProvider={dataProvider}>
        <Resource
        icon={ArticleIcon}
            name="posts"
            // list={ListGuesser}
            list={PostList}
            show={PostShow}
            edit={PostEdit}
            create={PostCreate}
        />
        <Resource   icon={PersonIcon} name="users" list={UserList} />
    </Admin>
);
