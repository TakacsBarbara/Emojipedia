import React from "react";
import Entry from "./components/Entry";
import emojipedia from "./emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emoji) => {
          return (
            <Entry 
              key={emoji.id}
              id={emoji.id}
              pic={emoji.emoji}
              name={emoji.name}
              desc={emoji.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
