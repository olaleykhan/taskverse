import React from "react";

const route = () => {
  return (
    <div>
      <p className="text-3xl text-center mb-8 "> Pusher REdirect</p>
      <p className="text-md text-slate-400">
        {" "}
        I don;t know why we need this but I get errors without it and the page
        is not even being used. the server redirects to it. why? I do not know.
        I imagine there should be a reditect config in opusher but I cant find
        it in the docs. what I would do would be to redirect the nextJS way but
        apparently, its not even needed.
      </p>
    </div>
  );
};

export default route;
