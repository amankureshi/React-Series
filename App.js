const demo = React.createElement("div", { id: "MainParent" },
    React.createElement("div", { className: "Parent1" },
      React.createElement("h1", { id: "parent h1" }, "this content is patent H1"),
      React.createElement("h2", { id: "Parent h2" }, "this content is h2")),
      React.createElement("div", { id: "Parent2" },
      React.createElement("h1", { id: "parent h1" }, "this content is patent H1"),
      React.createElement("h2", { style: { color: "hotpink", border: "2px solid black", padding: "10px", borderRadius: "40px", textAlign: "center" }, className: "Parent h2" }, "this content is h2"))
  );

  //console.log(demo)
  const demo1 = document.getElementById("root");
  const append = ReactDOM.createRoot(demo);
  append.render(demo);
  