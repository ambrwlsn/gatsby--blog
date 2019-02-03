import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const Content = styled.div`
  font-family: 'Quattrocento', sans-serif;
  line-height: 1.7;
  font-size: 1.25em;
`

const wiltPage = props => {
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="What I Learned Today" keywords={['wilt', 'learning', 'javascript']} />
      <div>
        <h1>hello</h1>
        {posts.map(({ node }) => {
          const { title } = node.frontmatter
          return (
            <div>
              <h1>{title}</h1>
              <Content className="e-content" dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default wiltPage

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___number], order: DESC }
      filter: { frontmatter: { posttype: { eq: "wilt" } } }
      limit: 1000
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            posttype
            number
          }
        }
      }
    }
  }
`

// import React from 'react'
// import { graphql } from 'gatsby'
// import Highlight from 'react-highlight'

// import Bio from '../components/bio'
// import Layout from '../components/layout'
// import SEO from '../components/seo'

// const Learning = () => (
//   <Layout>
//     <SEO title="All posts" keywords={['blog', 'gatsby', 'javascript', 'react']} />
//     <link rel="stylesheet" href="../../../node_modules/highlight.js/styles/a11y-dark.css" />
//     <section className="h-entry">
//       <h1 className="p-name">What I Learned Today - 100 Days</h1>
//       <div className="e-content">
//         <a name="top-of-page" />
//         <div className="wilt-image">
//           <img src="img/WILT.svg" alt="SVG of W.I.L.T acronym" />
//         </div>
//         <Highlight className="javascript">
//           {`var elements = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
//     ];
//     (elements.map(function(element) {return element.length}))
//     (elements.map(element => {return element.length}))
//     (elements.map(element => element.length))
//     (elements.map(({length}) => length))`}
//         </Highlight>

//         <div className="gatsby-highlight" data-language="css">
//           <pre className="language-css">
//             <code className="language-css">

//             </code>
//           </pre>
//         </div>

//         <div className="dropdown">
//           <input className="dropdown-toggle" type="text" />
//           <div className="dropdown-text">Choose lesson</div>
//           <ul className="dropdown-content">
//             <li>
//               <a href="#BEM">Day 1 - BEM</a>
//             </li>
//             <li>
//               <a href="#arrowfunctions">Day 2 - Arrow Functions</a>
//             </li>
//             <li>
//               <a href="#psuedoselectors">Day 3 - Psuedo Selectors</a>
//             </li>
//             <li>
//               <a href="#this">Day 4 - This</a>
//             </li>
//             <li>
//               <a href="#flux">Day 5 - Flux</a>
//             </li>
//             <li>
//               <a href="#json-ld">Day 6 - JSON-LD</a>
//             </li>
//             <li>
//               <a href="#csslayout">Day 7 - CSS Layout</a>
//             </li>
//             <li>
//               <a href="#debugging">Day 8 - Debugging</a>
//             </li>
//             <li>
//               <a href="#readable-code">Day 9 - Readable Code</a>
//             </li>
//             <li>
//               <a href="#strings">Day 10 - Strings</a>
//             </li>
//             <li>
//               <a href="#emmet">Day 11 - Emmet</a>
//             </li>
//             <li>
//               <a href="#testing">Day 12 - Testing</a>
//             </li>
//             <li>
//               <a href="#objectliterals">Day 13 - Object Literals</a>
//             </li>
//             <li>
//               <a href="#ternaryoperator">Day 14 - Ternary Operator</a>
//             </li>
//             <li>
//               <a href="#arrayprototypemethods">Day 15 - Array Prototype Methods</a>
//             </li>
//           </ul>
//         </div>

//         <p>
//           I loved writing <a href="../words">100 words for 100 days</a> &amp; now want to write 100
//           days of little HTML, CSS or JS (ES6) lessons. I'm going to write about methods and
//           techniques that I use often, either at work or on personal projects. The lessons will be
//           written from a <strong>NEWBIE</strong> (i.e. my) perspective, and so may not be perfect,
//           but they will offer a valuable insight into the thoughts of a new developer. My goal is to
//           learn/document things for myself, and to show people, particularly other new developers,
//           how someone like me approaches my work and hopefully give them something they can relate
//           to :) Thanks to <a href="https://lottejackson.com">Charlotte</a> for the suggestion!
//         </p>

//         <p>
//           <blockquote className="twitter-tweet" data-lang="en">
//             <p lang="en" dir="ltr">
//               Write about a different pseudo class every day? Or a different HTML element or JS
//               lesson every day? Anything you want to learn more about? I had hoped to do something
//               similar and never got round to it.
//             </p>
//             &mdash; Charlotte Jackson (@lottejackson){' '}
//             <a href="https://twitter.com/lottejackson/status/991415549476270081?ref_src=twsrc%5Etfw">
//               May 1, 2018
//             </a>
//           </blockquote>
//           <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
//         </p>

//         <article id="BEM">
//           <h2 className="m-t-m">
//             Day 1 - BEM
//             <a href="#BEM"> #</a>
//             <a className="link__top-of-page" href="#">
//               <img
//                 className="button__top-of-page"
//                 src="/img/back-to-top.svg"
//                 alt="Back to top toggle"
//               />
//             </a>
//           </h2>
//           <p>
//             I keep getting tripped up at work by forgetting to write modular CSS classes. There are
//             so many benefits to a robust CSS architecture that I really want to get it right. BEM is
//             a methodology to achieve this.
//             <code>Block</code>, <code>Element</code> and <code>Modifier</code>. A <code>Block</code>{' '}
//             is a component or feature than can stand alone and is not dependent on any other code.
//             It can be re-used anywhere. Next, an <code>Element</code>. This is always part of a{' '}
//             <code>Block</code> and has no meaning on its own. Lastly, there is the{' '}
//             <code>Modifier</code>. This changes the behaviour and/or appearance of a{' '}
//             <code>Block</code> or <code>Element</code>.
//           </p>
//           <p>Example:</p>
//           <p>
//             <code>.button</code> is a block.
//           </p>
//           <p>
//             <code>.button__label</code> is an element.
//           </p>
//           <p>
//             <code>.button--confirm</code> is a modifier.
//           </p>
//           <p>
//             See resources <a href="http://getbem.com/introduction/">here</a> and{' '}
//             <a href="https://zellwk.com/blog/css-architecture-1/">here</a>.
//           </p>
//         </article>

//         <article id="arrowfunctions">
//           <h2 className="m-t-m">
//             Day 2 - Arrow Functions<a href="#arrowfunctions"> #</a>
//             <a className="link__top-of-page" href="#">
//               <img
//                 className="button__top-of-page"
//                 src="img/back-to-top.svg"
//                 alt="Back to top toggle"
//               />
//             </a>
//           </h2>
//           <p>
//             Also known as a fat arrow, <code>=></code>. This ES6 feature is a fat topic, so I'll
//             concentrate on one aspect today.
//           </p>

//           {/* <pre>
//             <code>{```jsx
//   var elements = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
//     ];
//     (elements.map(function(element) {return element.length}))
//     (elements.map(element => {return element.length}))
//     (elements.map(element => element.length))
//     (elements.map(({length}) => length))
// ```}</code>
//           </pre> */}
//           <p>
//             Above is an altered version of the{' '}
//             <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">
//               MDN
//             </a>{' '}
//             JavaScript Demo, where you will find a wealth of information on what fat arrows can do
//             for you. The first function in the list is written without fat arrows. The last three
//             functions are variations of the first function, showing how fat arrows can be used to
//             write shorter function expressions, and therefore less code. You will need a code
//             compiler like <a href="https://babeljs.io/">Babel</a> to compile fat arrows into ES5
//             syntax so older browsers can use your JavaScript.
//           </p>

//           <p>
//             There are a _lot_ of resources that try explaining this syntax. Try Wes Bos's{' '}
//             <a href="https://wesbos.com/arrow-functions/">introduction</a> for a start. This is
//             complicated subject matter, though, so I suggest searching around for different posts,
//             reading a few and finding ones that make most sense to you.
//           </p>
//         </article>

//         <article id="psuedoselectors">
//           <h2 className="m-t-m">
//             Day 3 - Psuedo Selectors<a href="#psuedoselectors"> #</a>
//             <a className="link__top-of-page" href="#">
//               <img
//                 className="button__top-of-page"
//                 src="img/back-to-top.svg"
//                 alt="Back to top toggle"
//               />
//             </a>
//           </h2>
//           <p>
//             I only just found out that <code>::before</code> (<code>:before</code>) and{' '}
//             <code>::after</code> (<code>:after</code>) are psuedo elements, which are different from
//             psuedo classes. Both of these are grouped under psuedo selectors. I like this quote from
//             MDN ~
//             <blockquote>
//               Even the most skilled web developers are still amazed by what's possible using
//               selectors.
//             </blockquote>
//           </p>

//           <p>
//             Psuedo selectors are only two types of selectors. The others are: simple selectors,
//             attribute selectors, multiple selectors and combinators. All of these help us to target
//             and style HTML elements.
//           </p>
//           <p>
//             So, psuedo selectors include both psuedo elements and psuedo classes. They are added to
//             the end of other selectors, and don't apply to whole elements, only parts of them.
//           </p>
//           <p>
//             The psuedo classes (e.g. <code>:hover</code>, <code>:focus</code>, and{' '}
//             <code>:nth-of-type()</code> - plus 38 others) style elements in a <em>certain state</em>
//             .
//           </p>
//           <p>
//             The psuedo elements (e.g. <code>::after</code>, <code>::before</code>, and{' '}
//             <code>::first-letter</code> - plus 3 others, not including experimental ones) apparently
//             need <code>::</code> rather than <code>:</code>, although I've used them with only one.
//             These don't depend on the state of an element.
//           </p>
//           <p>
//             See this{' '}
//             <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements">
//               MDN
//             </a>{' '}
//             page for great examples and to use their awesome active learning playground (I did and
//             it was great for learning)!
//           </p>
//         </article>

//         <article id="this">
//           <h2 className="m-t-m">
//             Day 4 - this<a href="#this"> #</a>
//             <a className="link__top-of-page" href="#">
//               <img
//                 className="button__top-of-page"
//                 src="img/back-to-top.svg"
//                 alt="Back to top toggle"
//               />
//             </a>
//           </h2>
//           <p>
//             The <code>this</code> keyword is found in various programming languages, and behaves a
//             certain way in JavaScript. Apparently even experienced developers get confused by it.
//           </p>
//           <p>The button below logs to the console.</p>
//           <button id="leet">Click</button>
//           <p>
//             See this
//             <a href="https://codepen.io/ambrwlsn90/pen/ELEmxw?editors=1111">codepen</a> for the
//             code. It showcases one of the six ways <code>this</code> is used in JavaScript - thanks
//             to what I learned from Zell Liew's great{' '}
//             <a href="https://zellwk.com/blog/this/">blog post</a>. I really recommend this post for
//             beginners - you can try the examples in your console! In short, <code>this</code> can be
//             used globally, in object constructions, object methods, simple functions, arrow
//             functions, and event listeners. See the{' '}
//             <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this">
//               MDN docs
//             </a>{' '}
//             for more code-heavy examples.
//           </p>
//         </article>

//         <article id="flux">
//           <h2 className="m-t-m">
//             Day 5 - Flux<a href="#flux"> #</a>
//             <a className="link__top-of-page" href="#">
//               <img
//                 className="button__top-of-page"
//                 src="img/back-to-top.svg"
//                 alt="Back to top toggle"
//               />
//             </a>
//           </h2>
//           <p>
//             Recently, I began to write React at work and I've been doing okay with presentational
//             components, but much less so with business logic (I hear ya{' '}
//             <a href="http://bradfrost.com/blog/post/my-struggle-to-learn-react/">Brad Frost</a>
//             ). I've heard that improving my ES6 will really help, so you'll see more little lessons
//             on it, but I also want to touch on how to manage dynamic state. Despite the popularity
//             of Redux, one of my developer friends recommended covering Flux.
//           </p>
//           <p>
//             Flux is an application architecture for React (that can also be used elsewhere)
//             utilizing a unidirectional data flow. In essence, it is an observer pattern that offers
//             one-way data binding. Very useful when you need to keep lots of components in sync.
//           </p>
//           <p>
//             <strong>action -> dispatcher -> store -> view</strong>
//           </p>
//           <ul>
//             <li>
//               The <strong>action</strong> creator formats messages (what the user does) from the UI
//             </li>
//             <li>
//               The <strong>dispatcher</strong> takes the formatted messages and synchronously sends
//               them to different stores
//             </li>
//             <li>
//               The <strong>store</strong> holds all state logic and changes it by deciding what
//               actions it wants to pay attention to
//             </li>
//             <li>
//               The <strong>view</strong> takes changes from the store and updates the UI
//             </li>
//           </ul>
//           <p>
//             Please look at Lin Clark's great{' '}
//             <a href="https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207">
//               cartoon guide
//             </a>{' '}
//             for more details. For a more code-heavy example, see{' '}
//             <a href="https://blog.andrewray.me/flux-for-stupid-people/">here</a>. I feel like the
//             best way to learn about Flux is to build things in tandem with reading about it (and
//             finding nice developers who can guide you)!
//           </p>
//         </article>
//         <article id="json-ld">
//           <h2 className="m-t-m">
//             Day 6 - JSON-LD<a href="#json-ld"> #</a>
//             <a className="link__top-of-page" href="#">
//               <img
//                 className="button__top-of-page"
//                 src="img/back-to-top.svg"
//                 alt="Back to top toggle"
//               />
//             </a>
//           </h2>
//           <p>
//             JSON, or JavaScript Object Notation, is a simple language that represents objects on the
//             Web and facilitates data exchange. LD, or Linked Data, allows for the expression of
//             critical data on a site, and for it to be shared across sites. I first heard of it at
//             <a href="https://beyondtellerrand.com/events/duesseldorf-2018/speakers">
//               Beyond Tellerrand
//             </a>{' '}
//             in Düsseldorf on May 7th, during a talk about web annotations by{' '}
//             <a href="https://lyza.com">Lyza Danger Gardner</a>. JSON-LD allows expressions of linked
//             data in JavaScript. It's like grammar for describing strutured data. It can be thought
//             of as JSON, but with added semantics. And it can be easily implemented into existing
//             JSON structures. Here's some example JSON:
//           </p>
//           {/* <pre>
//             <code>
//               {{
//                 name: 'Amber Wilson',
//                 homepage: 'https://amberwilson.co.uk',
//                 picture: 'https://twitter.com/account/profil_image/ambrwlsn90',
//               }}
//             </code>
//           </pre>{' '} */}
//           Here is similar information in JSON-LD format:
//           {/* <pre>
//             <code>
//               {{
//                 '@context': {
//                   xsd: 'http://www.w3c.org/2001/XMLSchema#',
//                   foaf: 'http://xmlns.com/foaf/0.1/',
//                 },
//                 '@id': 'http://me.amberwilson.co.uk',
//                 '@type': 'foaf:Person',
//                 'foaf:name': 'Amber Wilson',
//               }}
//             </code>
//           </pre> */}
//           <p>
//             Above, we see that <code>context</code> can be added to data. <code>foaf</code> stands
//             for "friend of a friend" (see <a href="http://www.foaf-project.org/">here</a>), which
//             deals with people-related terms. <code>id</code> and <code>type</code>, like{' '}
//             <code>context</code>, assist in making our data shareable and semantic.
//           </p>
//           <p>
//             The concept of JSON-LD is simple, but using it can take getting used to. For more
//             in-depth information, see <a href="https://json-ld.org/primer/latest/">here</a>.{' '}
//           </p>
//         </article>
//         <article id="csslayout">
//           <h2 className="m-t-m">
//             Day 7 - CSS Layout<a href="#csslayout"> #</a>
//             <a className="link__top-of-page" href="#">
//               <img
//                 className="button__top-of-page"
//                 src="img/back-to-top.svg"
//                 alt="Back to top toggle"
//               />
//             </a>
//           </h2>
//           <p>
//             CSS layout is something that amazes and confuses me at the same time. There seem to be
//             so many approaches (e.g. floats, flexbox, grid), and so many frameworks (way too many to
//             mention). The paradox of choice seems to apply here.
//           </p>

//           <p>
//             I love hearing from people about CSS layout, and I was lucky to hear{' '}
//             <a href="http://www.miriamsuzanne.com/">Miriam Suzanne</a> talk about it at{' '}
//             <a href="https://beyondtellerrand.com/events/duesseldorf-2018/speakers">
//               Beyond Tellerrand
//             </a>{' '}
//             (check out the awesome layout on her site). The message she gave was to use CSS grid,
//             and provide fallbacks for browsers that aren't grid-compatible. She reasons that as grid
//             makes layouts so easy (and naturally responsive), that there is time to re-create
//             fallback layouts, which allows more creative control.
//           </p>
//           <blockquote className="twitter-tweet" data-lang="en">
//             <p lang="en" dir="ltr">
//               Often I allow fallback layouts to be much simpler. CSS Grid has power to create
//               layouts that have no *exact* fallback. Since grid makes many layouts easier, I have
//               extra time to do both. Similar time spent, more creative control.
//               <br />
//               <br />
//               Your mileage will depend on your constraints.
//             </p>
//             &mdash; Miriam Suzanne (@mirisuzanne){' '}
//             <a href="https://twitter.com/mirisuzanne/status/993813309441880064?ref_src=twsrc%5Etfw">
//               May 8, 2018
//             </a>
//           </blockquote>
//           <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
//           <p>
//             One thing I really like about CSS layouts is that they aren't designed to be used in
//             isolation. On the contrary, you can mix and match them. A grid item can become a flex
//             container, and a flex item can become a grid. You can even use floats with flexbox and
//             grid.
//           </p>

//           <p>
//             I am half-way through Wes Bos's <a href="https://cssgrid.io/">CSS grid</a> course and
//             already have ideas I am excited to make come to life using grid. There are looots of
//             great posts and articles out there by people who have had tonnes of fun and learned
//             loads by using grid. I really recommend finding some and making some stuff!
//           </p>
//         </article>
//         <article id="debugging">
//           <h2 className="m-t-m">
//             Day 8 - Debugging<a href="#debugging"> #</a>
//             <a className="link__top-of-page" href="#">
//               <img
//                 className="button__top-of-page"
//                 src="img/back-to-top.svg"
//                 alt="Back to top toggle"
//               />
//             </a>
//           </h2>
//           <p>
//             Recently at work, I've watched other developers use <code>console.log</code> a lot in
//             code to find desired values given by certain functions. I am often still confused where
//             to put <code>console.log</code>, and it is definitely not the only way to debug, so I've
//             also begun to use the developer tools JavaScript debugger in Firefox and Chrome. These
//             tools allow you to pause the execution of your code, and walk through it to help you
//             find bugs.
//           </p>
//           <p>
//             The debugger can do a lot, and it'd take a much longer post to walk through this tool's
//             UI, so I'll mention four of the most commonly used debugging methods here.
//           </p>
//           <ul>
//             <li>
//               <strong>Step over code</strong>
//             </li>
//             <ul>
//               <li>Steps over a function that doesn't contain a bug and runs its code</li>
//             </ul>
//             <li>
//               <strong>Step into code</strong>
//             </li>
//             <ul>
//               <li>Steps inside a function and allows you to run each part separately</li>
//             </ul>
//             <li>
//               <strong>Step out of code</strong>
//             </li>
//             <ul>
//               <li>Steps out of a function you are inside, and runs its code</li>
//             </ul>
//             <li>
//               <strong>Resume execution of code</strong>
//             </li>
//             <ul>Runs all code up until a specified breakpoint, which can be set at any point</ul>
//           </ul>
//           <p>
//             Debugging is something developers have to be really good at. So don't be scared to do
//             it! Or, be scared but do it anyway, you'll get better :)
//           </p>
//           <p>
//             Check out the docs on the{' '}
//             <a href="https://developer.mozilla.org/en-US/docs/Tools/Debugger">Firefox</a> debugger
//             and the{' '}
//             <a href="https://developers.google.com/web/tools/chrome-devtools/javascript/reference#breakpoints">
//               Chrome
//             </a>{' '}
//             debugger. Lots of great info there to help you get started. Also check out{' '}
//             <a href="https://peterlyons.com/js-debug">this article</a> from Peter Lyons. He explains
//             debugging of both front-end and back-end JavaScript code.
//           </p>
//           <p>
//             Also, check{' '}
//             <a href="https://daverupert.com/2018/05/my-struggle-with-testing-code/">this</a> out -
//             an honest post about how even experienced devs find it hard to debug.
//           </p>
//         </article>
//         <article id="readable-code">
//           <h2 className="m-t-m">
//             Day 9 - Readable Code<a href="#readable-code"> #</a>
//             <a className="link__top-of-page" href="#">
//               <img
//                 className="button__top-of-page"
//                 src="img/back-to-top.svg"
//                 alt="Back to top toggle"
//               />
//             </a>
//           </h2>
//           <p>
//             There are so many books, articles, and videos about how to make code readable, so I'll
//             keep this short and from my perspective (as a new developer who works mainly with
//             JavaScript).
//           </p>
//           <ul>
//             <li>
//               <strong>Code style</strong> of your project. This is specific to each project and
//               covers things like indentation, levels of nesting, naming, spacing etc. There are some
//               nice tools to help with this - for example <em>ESLint</em> that you can configure to
//               autoformat your code to your specified style upon file save.
//             </li>
//             <li>
//               <strong>Structure</strong>. This is about how you organise your code and files in a
//               project. I have been taught the benefit of abstracting and modularising code, making
//               it easier to tell what each part does and easier to test. In React, I've been writing
//               components that are either presentational (how things look) or containers (how things
//               work). Between different projects and programming languages, there are many, many ways
//               to structure code well, and opinions tend to differ.
//             </li>
//             <li>
//               <strong>Commenting</strong>. There are three ways I've been doing this - either in my
//               CSS, or in one of two ways (single-line with <code>//</code> or the{' '}
//               <a href="http://usejsdoc.org/index.html">JSDoc</a> way) in my JS. The most important
//               way to comment CSS is when <em>magic numbers</em>, i.e. seemingly random numbers that
//               don't use pre-defined mixins or seem to relate to the rest of the code, are present.
//               Leaving a note about these numbers can help other developers (or yourself a few months
//               later) understand why the CSS is written that way. An important thing to remember when
//               commenting JS code is that comments should state what the expected results of the code
//               (e.g. a function) is, and not a description of what the code is doing.
//             </li>
//             <li>
//               <strong>Naming</strong>. This is well-known as one of the hardest things in
//               programming. But it pays off big time. It helps developers get as close a possible to
//               the coveted <em>self-documenting code</em> that doesn't need any comments (although I
//               think no comments at all is probably a bad thing). I feel some developers keep
//               function and variable names short in order to make their code look cleaner and keep
//               file sizes small. However, on my latest project at work, without some of the really
//               long and descriptive naming going on, I'd have a much harder time understanding the
//               complex codebase.
//             </li>
//           </ul>
//           These are the four areas around readable code that popped into my mind. There are
//           definitely more, and there are <em>so</em> many resources on this. Go check 'em out, and
//           dicsuss them with people! I know I'll continue to do both those things for a long time to
//           come.
//         </article>
//         <article id="strings">
//           <h2 className="m-t-m">
//             Day 10 - Strings<a href="#strings"> #</a>
//             <a className="link__top-of-page" href="#">
//               <img
//                 className="button__top-of-page"
//                 src="img/back-to-top.svg"
//                 alt="Back to top toggle"
//               />
//             </a>
//           </h2>
//           <ul>
//             <li>A sequence containing some letters, numbers or symbols.</li>
//             <li>Have available methods and properties.</li>
//             <li>Can be stored in variables.</li>
//             <li>
//               Sit between either single quotes (<code>' '</code>), double quotes (<code>" "</code>
//               ), or backticks (<code>` `</code>).
//             </li>
//             <li>
//               Can be concatenated (stuck together) with the <code>+</code> operator, or with
//               backticks (template strings) in ES6.
//             </li>
//             <li>
//               Template strings, or template literals, can take any valid JavaScript expression,
//               allowing dynamic strings.
//             </li>
//             <li>
//               Can contain special characters, such as quotation marks, as long as they are escaped -
//               e.g. <code>"She'\ll be coming '\round the mountain when she comes"</code>.
//             </li>
//             <li>
//               There's no need to escape dissimilar quote marks. For example: "This 'is' fine". This
//               is probably why we tend to favour double quotes in HTML attribute values, and singles
//               in JS (since it allows you to create some innerHTML without the need for escaping).
//             </li>
//             <li>
//               When using template literals, you don't need to escape <code>'</code> or{' '}
//               <code>"</code> ... and <code>`this</code> <code>"is"</code> <code>'also'</code>{' '}
//               <code>fine`</code>
//             </li>
//             <li>
//               Is either a <em>string primitive</em> - immutable and more common, e.g.{' '}
//               <code>const stringPrimitive = "Hello, I am a string.";</code> .
//             </li>
//             <li>
//               Or a <em>string object</em> -{' '}
//               <code>const stringObject = new String("Hello, I am a string.");</code>
//             </li>
//             <li>
//               The <code>typeof</code> operator is used to determine if a string's type is{' '}
//               <em>string</em> or <em>object</em>.
//             </li>
//             <li>
//               Each character is indexed and can be accessed by an index number using square bracket
//               notation (e.g. "Hello World" - <code>myString[0]</code> outputs "H").
//             </li>
//             <li>
//               Similar methods to the one above include: <code>charAt()</code>,{' '}
//               <code>indexOf()</code>, <code>lastIndexOf()</code>,<code>slice()</code>.
//             </li>
//             <li>
//               Other common methods and properties are: <code>length</code>,{' '}
//               <code>toUpperCase()</code>, <code>toLowerCase()</code>,<code>split()</code>,{' '}
//               <code>trim()</code>, <code>replace()</code>.
//             </li>
//           </ul>
//           <p>
//             This list is meant as a quick and basic introduction to the magical world of JavaScript
//             strings. If there's something you'd like me to add, let me know!
//           </p>
//           <p>
//             Many thanks to my good friend <a href="">Mark</a> for suggestiong additions :)
//           </p>
//         </article>
//         <article id="emmet">
//           <h2 className="m-t-m">
//             Day 11 - Emmet<a href="#emmet"> #</a>
//             <a className="link__top-of-page" href="#">
//               <img
//                 className="button__top-of-page"
//                 src="img/back-to-top.svg"
//                 alt="Back to top toggle"
//               />
//             </a>
//           </h2>
//           <p>
//             Emmet provides a really useful way to make developing easier. It improves the{' '}
//             <strong>developer experience</strong>&#x2122;. I only discovered it recently but love it
//             already. It originated as{' '}
//             <a href="https://www.smashingmagazine.com/2009/11/zen-coding-a-new-way-to-write-html-code/">
//               Zen Coding
//             </a>{' '}
//             about ten years ago. There are a few uses (see official{' '}
//             <a href="https://docs.emmet.io/">docs</a>), but I'll focus on the amazing{' '}
//             <em>abbreviation and snippet expansion</em> feature.
//           </p>
//           <p>
//             In your HTML, say you need 100 divs. And each should have a class of teddybear. Typing
//             these out by hand might be boring. With Emmet, you can write{' '}
//             <code>div*100.teddybear</code> (then press 'tab'). Or if you need each class to be
//             item1, item2, etc. then you can write <code>div.item$*3</code>. There are also HTML
//             elements that get handily created with relevent attributes - try typing <code>a</code>{' '}
//             or <code>img</code>. See one of the original articles on Emmet{' '}
//             <a href="https://www.smashingmagazine.com/2009/11/zen-coding-a-new-way-to-write-html-code/">
//               here
//             </a>{' '}
//             for more examples. You can download it or check if it comes built-in with your text
//             editor of choice - I use VSCode and found Emmet was ready for use!
//           </p>
//           <p>
//             Emmet also features CSS selector expansion which allows you to type abbreviated
//             selectors that are expanded when you press 'tab'. It can also automatically add vendor
//             prefixes for you. Try and see how many abbreviations you can guess{' '}
//             <a href="https://docs.emmet.io/css-abbreviations/fuzzy-search/">here</a> ;)
//           </p>
//         </article>
//         <article id="testing">
//           <h2 className="m-t-m">
//             Day 12 - Testing<a href="#testing"> #</a>
//             <a className="link__top-of-page" href="#">
//               <img
//                 className="button__top-of-page"
//                 src="img/back-to-top.svg"
//                 alt="Back to top toggle"
//               />
//             </a>
//           </h2>
//           <p>
//             Today at work, we talked about test automation. One of the developers mentioned this
//             quote:
//           </p>

//           <blockquote>
//             We cannot rely on mass inspection to improve quality, though there are times when 100
//             percent inspection is necessary. As Harold S. Dodge said many years ago, ‘You cannot
//             inspect quality into a product.’ The quality is there or it isn’t by the time it’s
//             inspected. - William E. Deming in <em>Out of the Crisis</em>
//           </blockquote>

//           <p>
//             Therefore we cannot rely on creating features in a hurry, throwing them over the fence
//             and then expecting our applications to work well and without bugs. To instil quality
//             from the start of a feature, there should be tests for it.
//           </p>

//           <p>
//             Automated testing helps with this. Pre-commit hooks can be used when deploying builds so
//             that errors are caught and addressed early. Unit tests can be run using pre-commit hooks
//             - see my post on unit tests{' '}
//             <a href="https://amberwilson.co.uk/blog/unit-tests/">here</a>. However, there is a fine
//             line between having too many automated tests, e.g. end-to-end tests that take too long
//             to run with each build, and not having enough. Some companies run quicker unit tests on
//             each build, and then run end-to-end tests as a nightly build.
//           </p>
//           <p>
//             Please see the image below for one of many examples of the testing pyramid if you are
//             confused when I mention unit tests or end-to-end (UI) tests:
//           </p>
//           <p>
//             <a href="http://blog.xebia.com/its-2017-test-automation-is-not-optional-when-building-mobile-apps/">
//               <img src="img/test-pyramid.png" alt="The Testing Pyramid" />
//             </a>
//           </p>
//           <p>
//             Manual testing is important too. It is usually done by QA engineers, and helps reveal
//             edge cases that automated tests do not catch. As one developer at my work said, these
//             tests are like the cherry on top of the testing pyramid.
//           </p>
//         </article>
//         <article id="objectliterals">
//           <h2 className="m-t-m">
//             Day 13 - Object Literals<a href="#objectliterals"> #</a>
//             <a className="link__top-of-page" href="#">
//               <img
//                 className="button__top-of-page"
//                 src="img/back-to-top.svg"
//                 alt="Back to top toggle"
//               />
//             </a>
//           </h2>
//           <p>
//             I didn't learn about these at work but rather from a{' '}
//             <a href="https://www.youtube.com/watch?v=1DMolJ2FrNY">video</a> on the JavaScript reduce
//             function by the wonderful <a href="https://twitter.com/mpjme">MPJ</a>.
//           </p>
//           <p>
//             Object literals are a data structure that can be used in JavaScript. I really like
//             seeing how data can be organised and object literals do this really nice and tidily.
//             Here's an example:
//           </p>
//           {/* <pre>
//             <code>{```jsx
//   var cat = {
//   myCat: 'Tabby',
//   getCat: catTypes('Siamese')
// }
// ```}</code>
//           </pre> */}
//           <p>
//             The above code is an alteration of the MDN{' '}
//             <a href="https://developer.mozilla.org/bm/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals">
//               example
//             </a>
//             . I found MDN's explanation of object literals a little mechanical (compared to other
//             resources I found), but it does give quite a clear portrayal of how flexible object
//             literals can be. For instance, the typical combination of a key (<code>myCat</code>),
//             value (<code>Tabby</code>) pair can be accessed and used in other places in your code,
//             without these values polluting the global scope*. You can use the <code>catTypes</code>{' '}
//             function like so:
//           </p>

//           {/* {```jsx
//   function catTypes(type) {
// if (type !== 'Siamese') {
// return type;
// } else {
// return "Many " + type + " cats have blue eyes.";
// }
// }

// console.log(cat.getCat) // Siamese
// ```} */}
//           <p>
//             If this was not exciting enough, there are many other data types (not only functions)
//             that can be organised using object literals - e.g. array literals (see an example of
//             this in MPJ's video), nested object literals, numbers, any string, etc.
//           </p>
//           <p>
//             My friend <a href="https://qubyte.codes/">Mark</a> also informed me that an object can
//             contain itself (which is not recommend because it breaks JSON.stringify)!
//           </p>
//           <p>
//             Of course as with any programming language, there are rules. Some of these are that a
//             colon separates the key from the value, a comma separates key-value pairs, there
//             shouldn't be a comma after the last value-pair (well, it's fine to have a dangling
//             comma, but many style guides don't want you to do it), etc.
//           </p>
//           <p>
//             For more rules and when to use, check out{' '}
//             <a href="http://www.dyn-web.com/tutorials/object-literal/#f2">this </a> nice post, and
//             the MDN page.
//           </p>
//           <p>
//             I haven't had much of a chance to use object literals in the wild yet, but I hope to
//             soon. After I have, I hope to write an updated post that describes my new insights.
//           </p>
//           <p>
//             * An object (literal) can be used like a namespace to avoid polluting the global object,
//             but there's still the reference of the object attached to global. If you want to
//             completely eliminate variables polluting the global object as fields, then IIFEs are for
//             you. Some modules are also isolated from global. So, object literals limit pollution
//             through namespacing, but do not entirely eliminate it. (Thanks,{' '}
//             <a href="https://qubyte.codes/">Mark</a>, for the information).
//           </p>
//         </article>
//         <article id="ternaryoperator">
//           <h2 className="m-t-m">
//             Day 14 - Ternary Operator<a href="#ternaryoperator"> #</a>
//             <a className="link__top-of-page" href="#">
//               <img
//                 className="button__top-of-page"
//                 src="img/back-to-top.svg"
//                 alt="Back to top toggle"
//               />
//             </a>
//           </h2>

//           <p>
//             This is one of my favourite things in JavaScript. Not only is it simple and easy to use
//             but it's also applicable to lots of situations <strong>and</strong> it can replace more
//             verbose syntax (like <code>if</code> statements). It looks something like this:
//           </p>
//           {/* <pre><code>{```jsx
// const hoursOfSleep = 5;
// const timeForSleep = (hoursOfSleep < 8) <strong>?</strong>
// "Yup, no more phone for you" <strong>:</strong>
// "Ah nah, a few more minutes of phone time won't hurt";
// ```}
// </code></pre> */}
//           <p>
//             Notice the <strong>?</strong> and the <strong>:</strong>
//           </p>
//           <p>These are the important parts.</p>
//           <p>
//             If the condition (in this case <code>hoursOfSleep</code>) in front of the question mark
//             evaluates to true, the value of the first expression before the colon is returned. If
//             the condition in front of the question mark evaluates to false, the value of the second
//             expression after the colon is returned. As you can see, if you have had less than 8
//             hours of sleep, you shouldn't be using your phone.
//           </p>
//           <p>
//             Ternary operators are really flexible and can be used in a number of ways. You can stack
//             them together:
//           </p>
//           {/* <pre>
//             <code>
//               const catsRule = true, const dogsDrool = false, const catDog = catsRule ? (dogsDrool ?
//               "Let's all live in harmony": "Both cats and dogs drool") : (dogsDrool ? "Dogs are
//               cool, nearly as cool as cats" : "Dogs and cats can be friends");
//             </code>
//           </pre> */}
//           <p>
//             This outputs <code>"Both cats and dogs drool"</code>, and it's also total nonsense but I
//             hope you had fun staring at it and trying to figure it out. You don't even need to use
//             the parentheses, and can also use multiple statements separated by commas. You can
//             return statements in functions. You can use them in place of bulky <code>if/else</code>{' '}
//             statements with much nicer-to-read code. The question mark means <code>if</code> and the
//             colon means <code>else</code>.
//           </p>
//           <p>
//             I use ternary operators at work all the time. I hope you enjoy them as much as I do.
//             Check out the
//             <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">
//               MDN
//             </a>{' '}
//             page for some examples. This{' '}
//             <a href="https://scotch.io/tutorials/understand-the-javascript-ternary-operator-like-abc">
//               post
//             </a>{' '}
//             is lovely too.
//           </p>
//         </article>
//         <article id="arrayprototypemethods">
//           <h2 className="m-t-m">
//             Day 15 - Array Prototype Methods
//             <a href="#arrayprototypemethods"> #</a>
//             <a className="link__top-of-page" href="#">
//               <img
//                 className="button__top-of-page"
//                 src="img/back-to-top.svg"
//                 alt="Back to top toggle"
//               />
//             </a>
//           </h2>
//           <p>
//             <code>Array.prototype</code> methods are super useful for transforming array data and
//             cover a lot of common needs in modern applications! They are a form of higher-order
//             function (HOC), which are functions that take another function as their argument, or
//             return one as a result. A good way to view functions is as values, because then it's
//             easier to imagine being able to pass them around. For me, they've been a great
//             introduction into the world of functional programming. In functional programming, the
//             functions you create are
//             <em>pure</em>, i.e. they have no side effects, rely on the input you give them, and will
//             always produce the same output given the same input.
//           </p>
//           <p>
//             So, I use array methods more and more at work and they are definitely a pleasure to work
//             with! There are quite a lot of them (I think around 50), but there are some more
//             frequently used ones that cover most use cases, such as <code>sort()</code>,{' '}
//             <code>map()</code>, <code>filter()</code>, and <code>reduce()</code>. I was inspired to
//             write about them after reading{' '}
//             <a href="https://hackernoon.com/a-quick-introduction-to-functional-javascript-7e6fe520e7fa">
//               this
//             </a>{' '}
//             post by <a href="https://twitter.com/chalarangelo">Angelos Chalaris</a>! Please check
//             out his post because there are <em>great</em> examples & explanations in there!
//           </p>
//           <p>
//             Of course, since I like them so much, I wanted to give an example here. The one I used
//             most at work is
//             <code>map()</code> but I didn't choose it because I gave an example of it in{' '}
//             <a href="https://amberwilson.co.uk/blog/wilt100days/#arrowfunctions">Day 2</a> :) As a
//             side note, if you look carefully at the example in Day 2's lesson, you'll see how the
//             elements array takes the map function, which in turn takes a function as its input, and
//             returns a value based on the input. Below, I decided to create an example of{' '}
//             <code>reduce()</code>.
//           </p>
//           {/* <pre><code>const initialCatRating = [10, 10, 10];
// const accurateCatRating = initialCatRating.reduce(<span class="text__highlight">(total, amount) => {
//     total.push(amount * 2);
//     return total;
// }</span>, []);

// accurateCatRating // [20, 20, 20]
// </code></pre> */}
//           <p>
//             This example shows one of the <strong>many</strong> things reduce can do - alter values
//             in an array, and push the altered values into a new array! This means a brand new array
//             is returned, rather than altering the initial array. Let me explain what's happening:{' '}
//           </p>

//           <p>
//             There is an <code>initialCatRating</code> variable, which shows ratings of cats out of
//             ten. In the <code>accurateCatRating</code> variable, <code>reduce()</code> is called on{' '}
//             <code>initialCatRating</code>.
//           </p>
//           <p>
//             The first argument in <code>reduce()</code> is a callback function (see this in{' '}
//             <span className="text__highlight">pink</span> above). The callback takes at least two
//             and up to four arguments (<code>accumulator, currentValue, currentIndex, array</code>
//             ). The above example has taken two - <code>total</code> and
//             <code>amount</code>, which are actually <code>accumulator</code> and{' '}
//             <code>currentValue</code>. Naming doesn't matter here, but order does.
//           </p>
//           <p>
//             {' '}
//             The second argument in <code>reduce()</code> is <code>initialValue</code>, which is
//             optional. In the above example, <code>initialValue</code> is an empty array. The
//             callback only operates on every element in an <em>array</em> when
//             <code>initialValue</code> is present, so for the above example it is not optional.
//           </p>
//           <p>
//             Putting the callback and <code>initialValue</code> together allows <code>reduce()</code>{' '}
//             to take each element in the given array and operate on it, then push the returned values
//             (using <code>push()</code> - another array method) into a new array.
//           </p>
//           <p>
//             Of course, to make it re-usable, you can extract the callback function from the above
//             example into something like:
//           </p>
//           {/* <pre><code>const doubleMyValue = (total, amount) => {
//     total.push(amount * 2);
//     return total;
// };
// </code></pre> */}
//           <p>
//             Then, it can be put straight into <code>reduce()</code> (as an argument), to read:
//           </p>
//           {/* <pre>
//             <code>
//               const initialCatRating = [10, 10, 10]; const accurateCatRating =
//               initialCatRating.reduce(doubleMyValue , []); accurateCatRating // [20, 20, 20]
//             </code>
//           </pre> */}
//           <p>
//             The <code>reduce()</code> callback above is actually not a pure function, because it
//             modifies one of its parameters. To keep <code>reduce()</code> pure/functional, the
//             callback can only take primitive values. See the{' '}
//             <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce">
//               MDN
//             </a>{' '}
//             article for examples. And see some more examples{' '}
//             <a href="https://medium.freecodecamp.org/reduce-f47a7da511a9">here</a>. Try some{' '}
//             <code>Array.prototype</code> methods out in your browser console! :)
//           </p>
//         </article>
//       </div>
//     </section>
//     <Bio />
//   </Layout>
// )

// export default Learning

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
