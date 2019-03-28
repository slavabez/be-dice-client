import socket from "./socket";
import cookie from "js-cookie";
import { store } from "react-easy-state";

const socketStore = store({
  currentUser: {
    id: "",
    name: "",
    avatar: "",
    color: ""
  },
  register: props => {
    socket.emit("register.new", props);
  },
  checkSavedUser: () => {
    // If there's a local cookie, attempt to load it
    const saved = cookie.get("player_hash");
    if (saved) {
      socket.emit("register.restore", saved);
    }
  }
});

socket.on("register.new.success", data => {
  // We get back the hashed character profile and the profile data
  const { session, user } = data;
  // The session can be used to retrieve the user later in the future
  cookie.set("player_hash", session, { expires: 7 });

  socketStore.currentUser = {
    id: user.id,
    avatar: user.avatar,
    color: user.color,
    name: user.name
  };

  console.log(data);
});

export default socketStore;
