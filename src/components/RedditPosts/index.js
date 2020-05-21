import React from "react";
import { useMachine } from "@xstate/react";
import { redditMachine } from "./machine";
import { List, ListItem } from "./styles";

const subreddits = ["frontend", "backend", "vuejs"];

const list = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      delay: 1,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const listItem = {
  initial: {
    opacity: 0,
    x: -10,
  },
  final: {
    opacity: 1,
    x: 0,
  },
};

export default function RedditPosts() {
  const [current, send] = useMachine(redditMachine);
  const { subreddit, posts } = current.context;

  function generateRandomColor() {
    return "#" + Math.random().toString(16).substr(-6);
  }

  return (
    <main>
      <header>
        <select
          onChange={(e) => {
            send("SELECT", { name: e.target.value });
          }}
        >
          {subreddits.map((subreddit) => (
            <option key={subreddit}>{subreddit}</option>
          ))}
        </select>
      </header>
      <section>
        <h1>{current.matches("idle") ? "Select a subreddit" : subreddit}</h1>
        {current.matches({ selected: "loading" }) && <div>Loading...</div>}
        {current.matches({ selected: "loaded" }) && (
          <List variants={list} initial="initial" animate="final">
            {posts.map((post) => (
              <ListItem
                variants={listItem}
                key={post.title}
                color={generateRandomColor()}
                whileHover={{ scale: 1.2, borderRadius: 5 }}
              >
                {post.title}
              </ListItem>
            ))}
          </List>
        )}
      </section>
    </main>
  );
}
