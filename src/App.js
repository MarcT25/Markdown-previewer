
import './App.css';
import './Fonts/Raleway-VariableFont_wght.ttf';
import { useState } from 'react';
import ReactMarkdown from "react-markdown";

const text = `
# Welcome to my React Markdown Previewer!

## your markdown text shows below
### these are some instruction on how use markdown

use double * to make text bold: like this **NARUTO IS GREAT**.
Italic text? _ONE PIECE IS PEAK FICTION_

to create a blockquote use ">"
> This is a blockquote.

Need a list to rank your favorite anime? numbers follow by a . like this,
1. One Piece
2. Naruto
3. JJK

add images and links
[The big three](https://otaku.fandom.com/wiki/Big_Three)
![The big three](https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/12/shonen.jpg)


There's some much to learn to use markdown this is just some basics,
to learn more go to [Markdown syntax.](https://www.markdownguide.org/basic-syntax/)
  `;


function App() {


  const [markdownText, setMarkdownText] = useState(text);

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Markdown Previewer</h1>
      <div className="boxes-container">
        <textarea name="editor" id="editor" value ={markdownText} onChange={(e)=>setMarkdownText(e.target.value)}></textarea>
        <h2>Output</h2>
        <div id="preview">
        <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
