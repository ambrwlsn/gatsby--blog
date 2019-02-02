import React from 'react'
import styled from 'styled-components'

import Bio from '../../components/bio'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

const Wrapper = styled.div`
  padding: 0 8em;
`
const Intro = styled.div`
font-family: 'Courgette', cursive;
margin: 0 0 2em 0;
text-align: center;
`
const Title = styled.h1`
  font-size: 2em;
  margin: 1em 0;  
`
const Blurb = styled.h2`
margin: 1em 0;
`
const Date = styled.h3`
  font-family: 'Open Sans', cursive;
  margin-top: 0;
  text-align: center;
`
const Hashtag = styled.a`
text-decoration: none;
`
const Content = styled.div`
`
const Article = styled.article`
  font-family: 'Quattrocento', sans-serif;
  line-height: 1.7;
  position: relative;
  font-size: 1.1em;
  padding: 35px;
  margin: 1em 0 3em;
  border: 5px solid #2f4f4f;
  color: #333;
  background: #fff;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  &:nth-of-type(odd) {
    &:before {
      font-size: 0.8em;
      content: '';
      position: absolute;
      bottom: -20px;
      left: 40px;
      border-width: 20px 20px 0;
      border-style: solid;
      border-color: #2f4f4f transparent;
      display: block;
      width: 0;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: -13px;
      left: 47px;
      border-width: 13px 13px 0;
      border-style: solid;
      border-color: #fff transparent;
      display: block;
      width: 0;
    }
  }
  &:nth-of-type(even) {
    :before {
      content: '';
      position: absolute;
      bottom: -20px;
      right: 40px;
      border-width: 20px 20px 0;
      border-style: solid;
      border-color: #2f4f4f transparent;
      display: block;
      width: 0;
    }
    :after {
      content: '';
      position: absolute;
      bottom: -13px;
      right: 47px;
      border-width: 13px 13px 0;
      border-style: solid;
      border-color: #fff transparent;
      display: block;
      width: 0;
    }
  }
`
const WordsContainer = styled.section`
  color: #333;
  max-width: 500px;
  padding: 0 0 50px;
  margin: 0 auto;
`

const WordBubblePost = props => (
  <Layout>
    <SEO
        title='Words'
        description='Blending my love of words, the web, and psychology'
        keywords='words, thoughts, musing, musings'
        slug='/words/'
      />
    <Wrapper>
      <section className="h-entry">
        <Content className="e-content">
          <WordsContainer className="h-entry h-feed">
            <Intro>
              <Title className="p-name">100 words, 100 days.</Title>
              <Blurb className="p-summary">Blending my love of words, the web, and psychology</Blurb>
            </Intro>
            <Article id="day001" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">
                20.01.17</time>
        </Date> Hi, my name is Amber and I like words. Words
                like cognizant, parallel, and stupefy. English is my native language and I enjoy its
                nuances. I also enjoy other languages, especially German. I can't explain where my
                love of language came from. I didn't enjoy English classes at school and I took
                German classes on a whim. Playing with language makes me happy, no matter which
                one it is. Reeling off long, complicated sentences is fun - even more so when you
                have a friend to bounce them back at you. Is nothing in this world free? Words seem
                to be.
                &nbsp;<Hashtag href="#day001">#</Hashtag>
              </div>
            </Article>
            <Article id="day002" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">21.01.17</time></Date>I feel like I should link each day's theme with
                the last. So, let's keep talking about language. I get a rush of englightening,
                fresh, and positive energy when I read a beautifully crafted, pertinent, yet
                deceptively simple sentence. I crave books that contain such prose. For example,
                Helen Macdonald in 'H for Hawk' writes "I stared at the sun going down and the sun
                coming up, and the sun in between". These ordinary, seemingly insignificant words
                perfectly capture, to me, the picture of a person taking time to quietly contemplate
                life whilst connecting to nature. At one with nature.
                &nbsp;<Hashtag href="#day002">#</Hashtag>
              </div>
            </Article>
            <Article id="day003" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">22.01.17</time></Date>"Capture the mind and the heart and the body".
                This is something Don Norman said about designing things for people. I recently
                discovered this man after his book was recommended by Steve Krug in his book 'Don't
                Make Me Think'. I have seen videos of both men speaking and was really captivated
                and impressed by their humble natures and humility. Both seem really engaging,
                passionate and down to earth. These are qualities I really aspire to and I feel so
                happy I can learn from such people. The way design is entwined with psychology is so
                significant. This fascinates me.
                &nbsp;<Hashtag href="#day003">#</Hashtag>
              </div>
            </Article>
            <Article id="day004" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">23.01.17</time></Date>Inspiration comes from an infinite amount of
                places. Just about anything that exists has the potential to inspire at least one
                person. What sorts of things follow on from inspiration? In some, it may manifest as
                a reason to get out of bed in the morning. To others, it might lead them onto great
                things. Then again, great things are achieved from a cumulation of thousands of tiny
                steps. Getting up in the morning counts as one of them. Little steps should be
                celebrated and effort should be praised, even if no discernible progress was made.
                Keep up the inspiration.
                &nbsp;<Hashtag href="#day004">#</Hashtag>
              </div>
            </Article>
            <Article id="day005" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">24.01.17</time></Date>Once again my mental capacity cup runneth over
                with all the stuff I am trying to learn. Content management, conversion rates,
                static sites, blogs, CSS, SEO, databases, semantic code, JavaScript, user
                experience, logos, branding, analytics, design, what to do, what not to do,
                etcetera. The list goes on but these are things that immediately spring to mind. My
                mind, as it always has, constantly screams 'LEARN ALL THE THINGS!, while flooding me
                with the excitement this involves. Sometimes, I feel like I live inside a skydiving
                machine, with pieces of information flitting and floating about. Pieces eventually
                come together, relax.
                &nbsp;<Hashtag href="#day005">#</Hashtag>
              </div>
            </Article>
            <Article id="day006" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">25.01.17</time></Date>There are certain characteristics, one may agree,
                which describe each generation. I know I couldn't succinctly list them all, or if
                anyone could. In my generation, and most likely even more so in the next, there
                seems to be a growing concern about instant gratification. How does this affect us
                all? This is certainly a broad question that cannot be answered in one paragraph.
                Personally, my thirst for it often holds me back from respecting certain
                time-honoured truths: good things take time, hard-work pays off, being kind to
                yourself and others brings peace and connection. Learn to enjoy the ride!
                &nbsp;<Hashtag href="#day006">#</Hashtag>
              </div>
            </Article>
            <Article id="day007" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">26.01.17</time></Date>Does every person assume that others think how
                they think? This is something to watch in user research design. One of the many
                psychological intricacies one must consider in all steps of the design process. The
                job is not for one person in the team, but all members. A collective empathy is
                infinitely more powerful than when it is confined to one individual. However,
                empathy is not overt. It cannot be physically observed, so naturally has less
                emphasis and respect placed upon it. Empathy doesn't only form great products but
                also makes us better people. Put yourself in another's shoes.
                &nbsp;<Hashtag href="#day007">#</Hashtag>
              </div>
            </Article>
            <Article id="day008" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">27.01.17</time></Date>The fundamental component of empathy may be the
                ability to put yourself in another person's shoes. Can you imagine how another
                person thinks or feels without this ability? If not, can you respect the opinions,
                wishes or desires of others? Lack of respect in any sphere rarely fosters positive
                relationships or good business. User research is person-centered, and the person is
                the client. This is a psychological term used in therapy, support plans and
                interventions. Psychology can help us create extraordinary user experiences when it
                is correctly focused. By the way, new favourite word, murmuration. A wild flock of
                starlings.
                &nbsp;<Hashtag href="#day008">#</Hashtag>
              </div>
            </Article>
            <Article id="day009" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">28.01.17</time></Date>Something incredible about nature is the feelings
                it brings when all one does is quietly observe. If you want to clear your mind,
                soul, or lungs, nature is there. As well as bringing peace, nature brings me focus.
                On the occasional day I feel confused or unlike myself, stepping outside helps me.
                If I'm feeling reclusive, time spent outside among people can reignite my urge to
                connect with others. It reignites my passion and motivation. A person is a person
                because of people. It pays to remember we are an innately social species and
                connection with others is incredibly important.
                &nbsp;<Hashtag href="#day009">#</Hashtag>
              </div>
            </Article>
            <Article id="day010" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">29.01.17</time></Date>There are some people who underestimate the power
                of connection with others. I've seen people blossom under its influence.
                Disconnection from others may breed irritation, contempt, even hatred. The reasons
                people choose to keep to themselves are plentiful, I'm sure. I think that
                information and education on the matter can help people understand how and why to
                become more connected. Can technology help with this? I think it can. Social media
                is one method, although it has been slammed for creating the opposite effect. What
                other methods exist? With the boom of smartphones, perhaps an app would do quite
                well.
                &nbsp;<Hashtag href="#day010">#</Hashtag>
              </div>
            </Article>
            <Article id="day011" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">30.01.17</time></Date>Apps are all the range. Some people say Apple's
                App Store values quantity over quality too much. What is needed to create a quality
                app? I don't know the answer, although I'd like to learn. Indeed, I constantly feel
                my web-naivety slipping away. I'm slowly learning that a quality app is not built in
                a day, by a single developer, on a single system. Most importantly, I now appreciate
                that a good app needs maintenance. This point taps into the life-long learning ethos
                of programming. Systems change, new ideas arise, fierce collaboration occurs. Loving
                learning sets you in good stead.
                &nbsp;<Hashtag href="#day011">#</Hashtag>
              </div>
            </Article>
            <Article id="day012" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">31.01.17</time></Date>What do you like to learn about? How often do you
                learn it? Are there days you focus on it more? Why or why not? Curiosity may have
                killed the cat but I'm sure that learning in a safe and non-intrusive manner is
                always okay. Reading books or quietly tapping away on a laptop are harmless ways to
                learn. When might learning become unsafe? Curiosity may also engender gossip, or
                "unnecessary investigation or experimentation" as stated on Wikipedia. Gossip seems
                a natural human trait that fits with our penchant for learning. Curiosity killed the
                cat, but satisfaction brought it back.
                &nbsp;<Hashtag href="#day012">#</Hashtag>
              </div>
            </Article>
            <Article id="day013" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">01.02.17</time></Date>Why do people work the way we do? We are a social
                species. Many of us search for what makes us different. I believe the greatest
                harmony arises by focusing on similarities. Isn't it a wonderful thought? To be able
                to say that some traits are shared amongst us all. 'Maslow's Hierarchy of Needs' is
                nice to think about. He lists physiological wellbeing, safety, love, belonging, and
                self-esteem as traits we all share, or at least long for. There may be others, too.
                Knowing what unites us fosters respect, understanding, and tolerance for any type of
                person we may meet.
                &nbsp;<Hashtag href="#day013">#</Hashtag>
              </div>
            </Article>
            <Article id="day014" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">02.02.17</time></Date>How much does psychology really permeate
                different aspects of our lives? Why, if certain fundamental psychological principles
                exist, do people not consider these and act more kindly towards each other? Do
                negative feelings including jealousy and anger tend to override more positive ones,
                and, if so, why? Why is human nature so, that there is even a word to describe the
                pleasure we get when we see others fail? Schadenfreude. Is it the case that people
                expend effort to take the moral high ground but allow progress to evaporate at the
                whim of an emotion? Endless queries into human nature.
                &nbsp;<Hashtag href="#day014">#</Hashtag>
              </div>
            </Article>
            <Article id="day015" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">03.02.17</time></Date>Human nature can be depressing at times. So much
                anger, hatred, irritation, annoyance, passive-aggression, jealousy, name-calling,
                shame, guilt, etc. The list goes on. In a world that is becoming more connected, we
                may expect negativity to diminish, but it seems these primarily virtual connections
                don't always encourage positive emotions. Add in the mounting pressure felt by a
                constantly stretched world, and its ever-stretched population, and there leaves even
                less room for positivity. It is the responsibility of each individual to advocate
                positivity in their own lives. A little positivity spreads to the next person, then
                the next. Positivity can snowball.
                &nbsp;<Hashtag href="#day015">#</Hashtag>
              </div>
            </Article>
            <Article id="day016" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">04.02.17</time></Date>Speaking of snow, not only of course that it's
                magical and fantastic, but in the context of positivity - a bus driver told me
                animatedly this morning that he loves snow. I was surprised by this in several ways.
                Firstly, not many people like it, especially those who drive for a living. Secondly
                (and most shockingly), he was like a fountain of positivity. Each syllable he
                uttered trilled past his lips as if he was an elated schoolboy trapped inside a tiny
                elderly man's body. I am exaggerating but I'm actually not. His impact on me was
                just that large.
                &nbsp;<Hashtag href="#day016">#</Hashtag>
              </div>
            </Article>
            <Article id="day017" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">05.02.17</time></Date>What does it take to insert positivity into your
                lifestyle and be able to keep it alive and kicking? Perhaps if we visualise
                ourselves as robots with some SD card slots. Picture inserting the positivity card,
                installing the programme, and keeping it quietly running in the background. Things
                like social or cultural updates might periodically become available to help keep
                algorithms running smoothly in pace with real world events. Would such a robot seem
                inhuman? Of course. Nobody is endlessly positive, are they? As people we can't be
                expected to be, but we can do our best to promote positivity.
                &nbsp;<Hashtag href="#day017">#</Hashtag>
              </div>
            </Article>
            <Article id="day018" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">06.02.17</time></Date>I watch a vlog on blogging that mentioned Tumblr.
                I check out my old Tumblr account that I am certain is around eight years old by
                now. I love the first picture on my homepage, no surprise there. The picture belongs
                to a portraits blog. I scroll through the images and am captivated. The beautiful
                way people are captured in the pictures breathes emotion and clarity. They are
                gorgeously sculpted yet fragile and delicate depictions of the physical attributes
                common to us all. Lips, eyes, ears, noses, hair, clothes, jewellery, scars, etc. We
                can relate to these pictures. See http://pursuitofportraitsblog.tumblr.com/
                &nbsp;<Hashtag href="#day018">#</Hashtag>
              </div>
            </Article>
            <Article id="day019" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">07.02.17</time></Date>Pictures are something very close to my heart. My
                first camera was a £20 lump of gold plastic from Argos. I don't remember being
                excited about pictures then. My interest sprung up in high school. A best friend
                with similar interests may have been a catalyst. We loved design, photos and art.
                She is now a successful wedding photographer. I pursued what I deemed a much more
                academic path. Eight years of psychology sounds a lot but I cherish the memories
                I've made along the way. I kept photography as a hobby and it has continued to feed
                my soul.
                &nbsp;<Hashtag href="#day019">#</Hashtag>
              </div>
            </Article>
            <Article id="day020" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">08.02.17</time></Date>Yesterday, a developer at Codebar Brighton helped
                me implement a responsive navigation bar for my site. Due to my HTML and CSS being
                messy, the navbar did not work. I was advised to clean up my code to see if it
                helped. I'd been planning to do this anyway. Today, I created new files and copied
                over all non-obsolete code into them. I implemented the navbar code once more, and,
                voila! It worked. I achieved something today. A small victory but enough to get me
                publishing on Github once again. There's so much still to do, and not enough time!
                &nbsp;<Hashtag href="#day020">#</Hashtag>
              </div>
            </Article>
            <Article id="day021" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">09.02.17</time></Date>I went to my first user experience session today.
                It was run by a couple in their pleasant house situated in Upper Rock Gardens. There
                were two web developers, seven other testers, and plenty of nice cheese and wine.
                The hosts were extroverts, the web developers introverts, and interestingly many
                testers identified as introverts as well. It made me wonder whether I am
                introverted, extroverted, or otherwise. I'm reminded of a term for those between
                both extremes: ambiverts. Those comfortable doing both extroverted and introverted
                things. It'd certainly fit well with my name. Is it good or bad to label?
                &nbsp;<Hashtag href="#day021">#</Hashtag>
              </div>
            </Article>
            <Article id="day022" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">10.02.17</time></Date>Today I feel overwhelmed. I remained calm. The
                only way I can achieve something is to keep on working and learning. Managing my
                emotions is just a small part of life, really. Emotions are the things that drive
                most of what we do, which can lead us to naturally place large precedence on them.
                These primal, lizard-brained, atomic influxes of feeling can feel domineering and
                controlling. We need to show emotions that we are boss. We can still respect them,
                consider their opinions. After all, they exist to guide us. However, our rational
                side can be the leader. Just persevere.
                &nbsp;<Hashtag href="#day022">#</Hashtag>
              </div>
            </Article>
            <Article id="day023" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">11.02.17</time></Date>Many of my posts have been based on emotion,
                thinking, and introspection. Are they too many? Should I try to strike a balance
                between psychology, design and simple, light-hearted words? I will definitely try. I
                enjoyed my musings on lighter topics when I first started this writing challenge. I
                think I need to take more time to write during the day, in moments when I am
                inspired by something, or feel a lot of joy. Writing at the end of the day when I am
                inevitably tired doesn't always yield as large a variety of topics as I would like.
                &nbsp;<Hashtag href="#day023">#</Hashtag>
              </div>
            </Article>
            <Article id="day024" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">12.02.17</time></Date>Blogging. A mystical, magical, sparkly way to
                reach umpteen gazillion viewers from the confines of dark, musty room. A skilful
                foray into clicking your mouse button whilst sitting in one spot can ensure
                connections and networks are formed, agreements made, content published and big
                bucks brought in. I just ordered a book on blogging, looking forward to reading it.
                I have some small experience vlogging about learning German. I gained Youtube
                subscribers. Time and priorities zapped the energy I needed for the project. Now I
                regret I didn't keep it up. People want content, let's find how to provide it.
                &nbsp;<Hashtag href="#day024">#</Hashtag>
              </div>
            </Article>
            <Article id="day025" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">13.02.17</time></Date>Nick DeWilde of breakingintostartups.com said "Be
                a rocket ship. Don't worry much about your title but worry about what you're
                learning and what you do every day. Skills are important but having the right
                attitude is just as important". This is a lovely piece of advice for people worried
                about where learning to code might lead. It strikes me afresh each time I read or
                hear advice from a person in the industry. Each person I meet seems to delight in
                sharing their knowledge. Where else will you find that? I'm actually not sure, but
                I'm happy I found it.
                &nbsp;<Hashtag href="#day025">#</Hashtag>
              </div>
            </Article>
            <Article id="day026" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">14.02.17</time></Date>It seems to be easy to connect emotionally to the
                physical aspects of others. It is interesting that we can struggle to connect
                emotionally to the non-physical aspects. I wonder if it is that we are afraid of
                what we can't see. It could be that we fear having to deal with the emotional
                baggage of others, and that it may influence our own feelings in a negative way. I
                am reminded of the iceberg analogy where what we see is just ten percent of the real
                picture. Ninety percent of a person is below the surface. Invisible but there.
                &nbsp;<Hashtag href="#day026">#</Hashtag>
              </div>
            </Article>
            <Article id="day027" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">15.02.17</time></Date>People see a pretty site. They might spend a few
                seconds there. Perhaps longer if the site visually pleases them. Do they know what's
                going on under the site's surface? Not too likely. Can they appreciate the many
                hours and people needed to make the finished site? Also unlikely. As people, we look
                for tiny snippets of overt, physical clues in our environments. Like blackbirds
                collecting worms whilst remaining vigilant for cats. This is a part of human nature.
                We have no time to look deeper. Our survival depends on piecing together multiple
                bits of information as fast as possible.
                &nbsp;<Hashtag href="#day027">#</Hashtag>
              </div>
            </Article>
            <Article id="day028" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">16.02.17</time></Date>Tiny bits of information. Thousands go into code.
                Programmers build applications up with miniscule strings of letters and numbers. Or
                is that arrays, or variables, or booleans? JavaScript terminology is a topic for
                another day. What I mean is that programmers are masters of information
                architecture. They can build you a beautiful house. They have frameworks at their
                fingertips that can cause a fully-formed, 5 bedroom, 3 bathroom detached with a
                garden and a view spring up from the earth as fast as you can blink. Maybe an over
                exaggeration, but the process is nonetheless as exciting as it sounds.
                &nbsp;<Hashtag href="#day028">#</Hashtag>
              </div>
            </Article>
            <Article id="day029" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">17.02.17</time></Date>Coding is exciting. There is so much to do.
                Endless topics to learn, re-learn, discuss. Boundless enthusiasm from people working
                within. People from strikingly different backgrounds. The power to benefit people
                and empower society. Opportunities growing as the reach of technology increases.
                Niches to find and fit into. Mentors willing to help you get there. Open source as a
                well of openness providing free opportunities to practice and network. The work is
                not easy, but the rewards are there, and they are worth the effort. I like feeling
                my mind light up when I go to pursue each new goal.
                &nbsp;<Hashtag href="#day029">#</Hashtag>
              </div>
            </Article>
            <Article id="day030" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">18.02.17</time></Date>There are plenty of moments where life seems
                ordinary. Occasionally, quite a different moment may permeate our consciousness.
                Unique to each person, a sudden feeling that life is wonderful and contains
                boundless opportunities. We feel we can change the world and want to seek ways to do
                it. The difference between the ordinary and wonderful moments are quite striking.
                I'd like to experience more of the latter. Although it's hard to write a solid list
                of ways to do this, I believe feeling happy and fulfilled in life is at the heart of
                everything. Like the drummer in a band.
                &nbsp;<Hashtag href="#day030">#</Hashtag>
              </div>
            </Article>
            <Article id="day031" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">19.02.17</time></Date>When someone feels wonderful and inspired, do
                they become tired any more quickly? Can anyone realistically feel this way 100% of
                the time? I'd love to conduct a large survey on what makes people feel inspired,
                creative and empowered. Perhaps I could do this as a mini side-project. I can
                envision a poster campaign that uses happy, smiling portraits of people, speech
                bubbles containing their wisdom, and a bright colour palette. It might not change
                the world but it can get people to think, which is a good initial driver for change.
                It's amazing how design can inspire social good.
                &nbsp;<Hashtag href="#day031">#</Hashtag>
              </div>
            </Article>
            <Article id="day032" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">20.02.17</time></Date>One of the things I love most in the world of
                design, amongst many, is architecture. Zipping along the railway towards London I am
                privy to fleeting but detailed views of people's houses. In a split-second, I get to
                observe a dwelling where the occupants have spent countless hours. I feel almost as
                if I've been invited in for tea. My favourite part, though, is the opportunity to
                appreciate each house's collective history. The location, proximity to other houses,
                condition, windows, bricks, roof, garden. Wondering why it was built, when and by
                whom. What different story could each house tell?
                &nbsp;<Hashtag href="#day032">#</Hashtag>
              </div>
            </Article>
            <Article id="day033" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">21.02.17</time></Date>I want to work hard. My motives are many. I want
                to create. Not just in one medium either. I long to release the fiery passion I've
                had inside me for decades. Turns out I was always a wannabe designer. From doodles
                in class, to Neopet page HTML, to animated boy band GIFS, to PaintShop Pro, to
                Photoshop, to photography, to drawing portraits, to blogging, to vlogging, to
                stop-motion animation. I want to use my skills to make a positive change in the
                world. I feel that responsibility. I don't think talent should ever go to waste.
                Release the flames.
                &nbsp;<Hashtag href="#day033">#</Hashtag>
              </div>
            </Article>
            <Article id="day034" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">22.02.17</time></Date>Keeping a creative flame burning requires more
                than fuel, say in the form of food. As people we also have advanced CPUs to run (our
                brains), and for this we need plenty of sleep. A need is quite a particular thing.
                User experience designers can explain the difference between user's needs and wants.
                What people want may not always be in line with what they need. On one hand,
                carefully researching and listening to users through a series of planned questions
                can help distinguish the two. On another, merely observing how people interact with
                their environment can say a lot.
                &nbsp;<Hashtag href="#day034">#</Hashtag>
              </div>
            </Article>
            <Article id="day035" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">23.02.17</time></Date>We probably think and make decisions based on
                emotions. Advertising and businesses rely on this. There may be very few people in
                control of all their emotions, even if we'd like to be. What about being 'in the
                moment' with an emotion? Say we're angry. A negative feeling. Can we embrace this
                feeling as our own, unique experience, appreciate it even? A negative feeling isn't
                forever. It's more like a brief snapshot in the story of you. Let the feeling flow
                through you, relish what it means to be human. Not only are we physically capable,
                but mentally as well.
                &nbsp;<Hashtag href="#day035">#</Hashtag>
              </div>
            </Article>
            <Article id="day036" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">24.02.17</time></Date>There are capabilities available to us that
                escape the vast majority of life. The ability to ponder decisions, actions and
                situations and arrive at one of an infinite number of conclusions. Recently, a
                friend engaged me in conversation around such things. He explained how amazing it is
                that we're blessed with our cognitions. I believe life is something wonderful and
                precious. It should be enjoyed and relished. Hard work is important, but play is as
                well. A developer speaking on a podcast I heard today reiterated this. We can't
                realise our full potential unless we are happy in all aspects.
                &nbsp;<Hashtag href="#day036">#</Hashtag>
              </div>
            </Article>
            <Article id="day037" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">25.02.17</time></Date>When I take care of myself, give myself that
                respect, I find everything else much easier. I can accomplish my goals faster and
                retain lots more information. People take care of themselves in different ways. What
                might work for one may not work for another. This isn't to say that gathering
                different perspectives from others isn't useful. I actually believe this is one of
                the most important things we can do. Other perspectives can refresh our own,
                sometimes stale, perspectives. It could be that true happiness occurs when we
                connect with people, learn their stories, and are in turn open.
                &nbsp;<Hashtag href="#day037">#</Hashtag>
              </div>
            </Article>
            <Article id="day038" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">26.02.17</time></Date>Travelling is something I do that brings me what
                nothing else can. It is impossible for me to say what could be more life-giving.
                However, it may increase my awareness of the world that I know too much. Residing
                permanently and happily in one country must be a soothing bubble. I haven't done so
                for eleven years, and never in my adult life. I still believe life is too short to
                be happy remaining in one place. Life and wonderful experiences await those who are
                hungry to jump into the unknown. There are billions of people, let's meet them all.
                &nbsp;<Hashtag href="#day038">#</Hashtag>
              </div>
            </Article>
            <Article id="day039" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">27.02.17</time></Date>The people I've met so far in the tech world have
                inspired, encouraged and amazed me. Knowing there are so many more I have yet to
                meet makes me really happy. They are part of a group who are always learning and
                excited to push boundaries. Brian Chesky of Airbnb said "Never assume you can’t do
                something. Push yourself to redefine the boundaries." Mark Hurrell of GOV.UK
                explains how designers and developers will often be challenged, be uncertain, and
                not know the answer to things. Ambiguity seems to be something to grab by the horns,
                rather than being afraid of.
                &nbsp;<Hashtag href="#day039">#</Hashtag>
              </div>
            </Article>
            <Article id="day040" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">28.02.17</time></Date>Is ambiguity ever something to be afraid of?
                Would most people like to live the same every day, with no changes or challenges
                along the way? There might be something desirable about a comfort bubble. Though, in
                my experience, I've never learned much while being in one. Pushing boundaries at
                home, not just in work, might be important. I jumped out of my comfort by travelling
                and living in different countries, meeting as many people as I could. I learned and
                grew so much doing it. On top of this, I can enjoy having a worldwide family for
                life.
                &nbsp;<Hashtag href="#day040">#</Hashtag>
              </div>
            </Article>
            <Article id="day041" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">01.03.17</time></Date>I got back from Berlin today. As the clock struck
                midnight I climbed into my own bed. Today in Berlin it was cold, windy and rainy. I
                rented a bike again but gave it back soon after because cycling was no fun. The city
                leaves me feeling many things. I can't quite work out where the feelings come from.
                I have a lot of history in this country, and especially in this city. 9 months, two
                jobs, four different flats, many friends and a relationship. The city makes me feel
                happy and yet engulfed and lonely at the same time.
                &nbsp;<Hashtag href="#day041">#</Hashtag>
              </div>
            </Article>
            <Article id="day042" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">02.03.17</time></Date>I have lived in Brighton almost 9 months now. The
                longest I have lived anywhere since I studied in the Netherlands in 2014. The longer
                I live here, the more at home I feel. Leaving for holidays and coming back requires
                some adjusting though. I am getting closer to being able to complete my career
                shift. Leaving Brighton for a few days throws me off this focused course slightly.
                After the wobble, I slowly but surely gather momentum and can really put my foot on
                the gas peddle. Although, I will of course drive carefully and watch out for
                hazards.
                &nbsp;<Hashtag href="#day042">#</Hashtag>
              </div>
            </Article>
            <Article id="day043" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">03.03.17</time></Date>I realise more and more how each person's journey
                to becoming a developer is different. This must be largely due to the vast number of
                different things one can do as a developer. A close second is likely to be that
                people from any background imaginable can become developers. This, along with demand
                for new developers and attractive career prospects, sees more people entering into
                this journey. It's becoming ever more important to let your passion and hard work
                shine through. A friend of mine told me JavaScript gives her a dopamine rush. She's
                on her way to big things.
                &nbsp;<Hashtag href="#day043">#</Hashtag>
              </div>
            </Article>
            <Article id="day044" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">04.03.17</time></Date>My friend describes JavaScript as logical and CSS
                as creative. And she prefers the former. It made me wonder if my preference for the
                latter was due to a difference in our brains. Studying psychology, I learned about
                the apparent contrast between the left and right halves of the brain. Is one side
                really more logical or creative than the other? I found a book recommended on a
                tweet called 'A Whole New Mind'. I ordered it straight away. It is written by a
                former Obama speech writer called Daniel Pink. His writing is so engaging and down
                to earth.
                &nbsp;<Hashtag href="#day044">#</Hashtag>
              </div>
            </Article>
            <Article id="day045" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">05.03.17</time></Date>I'd be interested to know what books mean to
                different people. Personally, I like collecting books that can teach me something
                about the world, and tend to do this faster than I can read them. I find value in
                fiction but don't have time to enjoy it. A friend told me the non-fiction he's
                encountered has always seemed to be a bit on the dry side. I gently disagreed,
                countering that those who write non-fiction usually do so because they are immersed
                in a topic they are highly passionate about. I revel in feeling the passion bouncing
                off each word.
                &nbsp;<Hashtag href="#day045">#</Hashtag>
              </div>
            </Article>
            <Article id="day046" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">06.03.17</time></Date>I want to write a post on words. Words, to me,
                are magical. To me, they breathe culture, history, emotions and knowledge. Everyone,
                everyday, uses words. Words bind the world together in so many ways. Their
                fascinating nuances and rich histories hail back to when our species first gained
                the ability to use them. Countless thousands of languages, some now lost forever,
                developed over thousands of years. In no one language does one express themselves
                the same way. "To have another language is to possess a second soul" - Charlemagne.
                Learning a new language brings you outside yourself, an exhilarating process.
                &nbsp;<Hashtag href="#day046">#</Hashtag>
              </div>
            </Article>
            <Article id="day047" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">07.03.17</time></Date>I have recently thought about re-starting my
                YouTube channel{' '}
                &nbsp;<Hashtag href="https://www.youtube.com/channel/UC-GWT3LridO0sh6KmxXSDQg" target="_blank">
                  'MyGermanLearningJourney'
                </Hashtag>
                . The last video I posted there was from late 2014. I stopped due to lack of time
                and stress. I've wanted to continue improving my German ever since. Now I'm settled
                in a great place and feel warmth and inspiration from countless people around me, I
                once again feel like helping others improve as well. I even have ideas already. I
                had struggled to think of any before. I feel many vloggers publish on a schedule,
                say Monday mornings. I want to do this too. There's planning to be done.
                &nbsp;<Hashtag href="#day047">#</Hashtag>
              </div>
            </Article>
            <Article id="day048" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">08.03.17</time></Date>There is planning to be done but how do I fit it
                in? I keep asking myself this question. There is so much I want to learn. I really
                want to learn all that I can about the world of web and software development. In an
                attempt to organise my learning I write myself goals but these pile up and are hard
                to follow. I have begun writing down the things I do every day. The lists are long.
                Information comes at me from all angles. I love it but it's exhausting. I just need
                more hours in the day.
                &nbsp;<Hashtag href="#day048">#</Hashtag>
              </div>
            </Article>
            <Article id="day049" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">09.03.17</time></Date>Tonight was SheSaysBrighton. There were five
                women speakers. They spoke about the future of women. Of successful women. Women
                with a voice. Women not afraid to pursue success and have their voice heard. One
                speaker, a woman named as one of Elles's thirty women under thirty changing the
                world, called the stage 'my stage'. My first impression is that she was being cocky,
                but it soon dawned on me she was asserting the power she has every right to assert.
                She encouraged us to be 'upfront' and bold, and explained that there's a huge lack
                of diversity on stages worldwide.
                &nbsp;<Hashtag href="#day049">#</Hashtag>
              </div>
            </Article>
            <Article id="day050" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">10.03.17</time></Date>The talks at SheSaysBrighton made me realise that
                there is no one set path to success or changing the world. Even if you begin your
                journey later than others did. Does the old adage 'better late than never' ring
                true? Yes it does. Rejoice in the sound of a thousand bells, encouraging you to
                achieve what you really want. Step back, look around and observe the beautifully
                diverse film reels that are everyone else's life paths. Strength comes from
                diversity. Multitudes of different experiences foster shared understanding,
                connection and knowledge growth. We are stronger together. Always encourage others
                to succeed.
                &nbsp;<Hashtag href="#day050">#</Hashtag>
              </div>
            </Article>
            <Article id="day051" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">11.03.17</time></Date>I read that those who are jealous of others'
                success will find it hard to be successful themselves. Conversely, lifting others up
                and celebrating their successes, no matter how big or small, can increase your own
                chances of enjoying success and growth. I would like to find a credible scientific
                paper and backup the claims I have made here. Even without solid evidence, it may
                not be hard to imagine that choosing happiness over bitterness can only affect one's
                life positively. Making an effort to introduce and maintain snippets of positivity
                in life can spark a snowball effect of happiness.
                &nbsp;<Hashtag href="#day051">#</Hashtag>
              </div>
            </Article>
            <Article id="day052" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">12.03.17</time></Date>Making a conscious effort to be positive can
                promote happiness. Simply being yourself is another way to do this. Being yourself
                is often overlooked or undermined. I have been told that if you want to be good at
                public speaking, try to be yourself. Others want to see the genuine you. They don't
                want to see a copy of someone else. Everyone is unique and that's a wonderful thing.
                Bring yourself to the table and people will be able to learn from your one-of-a-kind
                perspective. Don't put on a show, be a show-stopper. It requires so much less
                effort, really.
                &nbsp;<Hashtag href="#day052">#</Hashtag>
              </div>
            </Article>
            <Article id="day053" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">13.03.17</time></Date>Public speaking appears to be a scary thing for
                everyone. Not one person I've spoken to has told me they aren't at least a little
                nervous stepping up on stage. Personally, some audiences scare me more than others.
                I am more likely to speak confidently to a whole room of strangers about a topic I
                have no knowledge on (i.e. Toastmasters) than a smaller group of peers about a topic
                I've thoroughly researched (i.e. a Master's class at university) Why? I don't
                know. I do know that I want to practice public speaking. So I can share my passion
                live.
                &nbsp;<Hashtag href="#day053">#</Hashtag>
              </div>
            </Article>
            <Article id="day054" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">14.03.17</time></Date>Speaking to people in the tech industry can also
                be intimidating. People with many more years of experience than me seem like giants.
                Towering above me, it seems their head and shoulders are shrouded in opaque,
                soundproof clouds, through which I can discern fast-paced mumbling but not much
                else. At times, they bend down, look you me the eyes, and talk to me. Eventually,
                they inevitably end up in the clouds again. Goodness knows what they are doing up
                there. What exciting topics they are discussing. I like giving visual explanations.
                Perhaps my vision is complete nonsense. What is yours?
                &nbsp;<Hashtag href="#day054">#</Hashtag>
              </div>
            </Article>
            <Article id="day055" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">15.03.17</time></Date>It's a good kind of exhaustion, creative
                exhaustion. Throwing yourself into twelve straight hours of talks, discussions,
                meeting new people, and thinking of ideas. You feel your brain starting to ask
                "okay, what's up here?". Talking to a friend who recently moved from a physically
                demanding to a mentally demanding job made me consider the differences between
                these. How many types of exhaustion might there be? Perhaps, broadly, only physical
                and mental. Physical exertion can, in short bursts, give you endorphins. Being on
                your feet all day probably won't give you any. Being creative all day? That gives me
                plenty.
                &nbsp;<Hashtag href="#day055">#</Hashtag>
              </div>
            </Article>
            <Article id="day056" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">16.03.17</time></Date>I am trying to be more and more productive every
                day. How can productivity be defined? Put simply it may mean getting as much done in
                a short a time as possible. How, then, can one measure productivity when there are
                no set goals? Learning about web development and the massive umbrella of skills that
                covers it makes it hard to set tangible goals. There's simply too much to learn. How
                can new developers (who are also very curious beings) feel productive while
                learning? I make lists of small tasks I want to achieve. This helps me focus my
                time.
                &nbsp;<Hashtag href="#day056">#</Hashtag>
              </div>
            </Article>
            <Article id="day057" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">17.03.17</time></Date>Small lists. Post-its. Facebook messages. Twitter
                messages. Facebook saves. Twitter saves. Screenshots. Pictures. ColorNote app. Word
                of mouth. E-mails. Bookmarks. And more. The places I store tiny snippets of useful
                information are plenty. Consolidating them all is difficult. One thing that helps me
                get tasks done and leads me back to relevant snippets is writing a to-do list daily.
                I know everyone does things differently, which is a fascinating topic by itself.
                Finding your own, personal, best way of doing things can open up the doors of
                productivity for you. Want exclusive membership to 'Productivity Manor'? Search and
                earn it.
                &nbsp;<Hashtag href="#day057">#</Hashtag>
              </div>
            </Article>
            <Article id="day058" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">18.03.17</time></Date>Let me take a quick foray into the topic of
                success. There can be much said about it. It can scare some people. I wonder if it
                is really so scary, or elusive, or undefined. Maybe people get worked up pursuing
                it. Perhaps it's easier to obtain than many think. Stepping back, taking a deep
                breath, and spending a few moments thinking realistically can bring your path into a
                clearer view. Note in simple terms what you want and, much more importantly, why you
                want something. The honest and unique reasons behind why you want something are
                important to know.
                &nbsp;<Hashtag href="#day058">#</Hashtag>
              </div>
            </Article>
            <Article id="day059" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">19.03.17</time></Date>I talked about the importance of being yourself,
                about being honest and open. I get reminded of this multiple times every single day
                when I talk to developers. How is it that I get reminded of this with such
                frequency? Developers, the ones I have met anyway, are some of the most open,
                empathetic, and intelligent people I've ever encountered. I'm not one for mushy
                sentiments, honest. They remind me of an over-the-top, airy-fairy teen beauty queen
                acceptance speech every time. You can believe that I'll only give them where credit
                is due. Get to know a developer, they rock.
                &nbsp;<Hashtag href="#day059">#</Hashtag>
              </div>
            </Article>
            <Article id="day060" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">20.03.17</time></Date>As a budding developer, is it more important to
                read a lot, practice a lot, talk to lots of people, have your own site, build a
                stunning portfolio, worry all the time about the skills you'll need to be hired? I
                am realising more and more that there's no prescribed path, and there's no one thing
                that's more important than another. In the world of development it might, just
                infact, be most important to show passion, willingness to learn, kindness, empathy,
                openness, honesty, etc. A genuine, fiery, popping enthusiasm for the world of web
                development gives you the best start.
                &nbsp;<Hashtag href="#day060">#</Hashtag>
              </div>
            </Article>
            <Article id="day061" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">21.03.17</time></Date>I got some unexpected advice from someone at
                Codebar. It reminded me how magic it can be to connect to someone in such a
                meaningful way, just by sharing stories and encouraging each other. It's a pretty
                good incentive for talking to as many people as possible. The definition of a good
                life for me is being able to connect with other people, share experiences, and find
                common ground. Life is too short to be worried about what people will think of you
                or if they'll reject you when approaching them. Be yourself, don't deprive other
                people of your magic.
                &nbsp;<Hashtag href="#day061">#</Hashtag>
              </div>
            </Article>
            <Article id="day062" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">22.03.17</time></Date>All the emphasis is architect or designer,
                scientist or engineer or whatever, as opposed to where do you want to live? What
                kind of life do you want? I saw this quote at a job fair. It spoke to me as I've
                always been primed to think of jobs in rather black and white terms. Study this to
                be this. If this prescribed path isn't followed, success can't be guaranteed. I
                believe this stifles creativity and out-of-the-box thinking, which is a big shame
                because the world needs more of that stuff. I'm finally starting to ask myself the
                right questions.
                &nbsp;<Hashtag href="#day062">#</Hashtag>
              </div>
            </Article>
            <Article id="day063" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">23.03.17</time></Date>There is a somewhat inherent feeling of security
                attached to the promise of a prescribed path. Maybe the feeling comes from how our
                education system is formed. Being told to read certain books, practice certain
                questions, pass a highly standardised exam, just to get a certificate proving you
                are in fact smart. Twelve to fourteen years of this may foster a strong attachment
                to following set guidelines. Ones written by people you'll never even meet. Do we
                need to move away from this and promote more out-of-the-box thinking in schools?
                There could be reasons why this shift hasn't already happened.
                &nbsp;<Hashtag href="#day063">#</Hashtag>
              </div>
            </Article>
            <Article id="day064" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">24.03.17</time></Date>The phrase 'out-of-the-box thinking' seems quite
                ambiguous to me but I think it'd be fun to analyse. For me it conjures an image of a
                brown, nondescript, cube-shaped cardboard box. The box is shut, but quietly humming
                and occasionally twitching. Through the cracks I see a bright, colourful light
                seeping through. Wrapped messily around it is a yellow tape reading 'caution, do not
                enter'. I pick it up and realise it's heavy. I hold it up just high enough to peer
                through a tiny gap on the side. Inside are a million thoughts whizzing around with
                no place to go.
                &nbsp;<Hashtag href="#day064">#</Hashtag>
              </div>
            </Article>
            <Article id="day065" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">25.03.17</time></Date>I can credit the secondary and tertiary education
                systems for exposing me to a broad range of subjects, teaching me to write well, and
                showing me how to learn. I can thank my time at university for some very formative
                experiences involving great friends and teachers. Even so, I'm happy to now be free
                of these systems. Learning something in order to battle for the highest grade feels
                counter-intuitive to what learning should be about. For me, learning springs from a
                desire to spread knowledge that empowers society and helps people lead happier
                lives. Why do you want to learn?
                &nbsp;<Hashtag href="#day065">#</Hashtag>
              </div>
            </Article>
            <Article id="day066" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">26.03.17</time></Date>Ever wondered how to tell if you've learned
                something well? A good marker is the ability to explain it simply, concisely and
                confidently to anyone who asks. This is a lot harder than it looks. It requires deep
                understanding. Explaining an intricate or complicated topic in one hundred rather
                than two hundred words may appear easy at first. Trying it is another matter. In web
                development, where content is key and user/stakeholder time is short, this ability
                is much appreciated, and is often essential for good business. I practiced it a lot
                during my Master's. It's a fun challenge.
                &nbsp;<Hashtag href="#day066">#</Hashtag>
              </div>
            </Article>
            <Article id="day067" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">27.03.17</time></Date>Learning and sharing knowledge makes me happy.
                Writing or designing something that can spark someone's imagination or motivation
                drives me to create things. I want people to be informed and educated. I believe so
                much of the negativity in the world, whether between nations or within families, can
                be lessened through education. I learn more about myself all the time. I learn why I
                think or behave a certain way, what the function is, and how to address it to help
                me feel happier. The web can help educate us, especially if people are allowed to
                freely publish their perspectives.
                &nbsp;<Hashtag href="#day067">#</Hashtag>
              </div>
            </Article>
            <Article id="day068" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">28.03.17</time></Date>Words and the web, what a wonderful combination.
                What there is to learn about the web, it's history and intricacies, is almost as
                engaging as the content of the web itself. Even more exciting, there is a solid
                group of smart and sparkling individuals whose vast, combined knowledge helps
                advocate for the continuation of a strong and fair web. A web that's accessible by
                all, regardless of age, gender, status, disability. One that's secure. One that can
                be used as a platform for free speech. I'm so thankful for these people who fight
                for a web that belongs to all.
                &nbsp;<Hashtag href="#day068">#</Hashtag>
              </div>
            </Article>
            <Article id="day069" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">29.03.17</time></Date>On the flip side of creating a web that's fair
                for all is building a corresponding workspace that's fair for all. The 'WomenInTech'
                hashtag is heavily trending right now, and for good reason. Google's Laszlo Bock
                said that development teams are not diverse enough, but diverse teams have been
                shown to produce the best work. He also mentions sexuality, background,
                "...whatever". I believe it's mostly about normalising the role of minorities in
                technology and smashing through traditionally-held stereotypes. People naturally
                feel uncomfortable challenging the status quo, things long embedded in their thought
                processes. A gentle but confident nudge will work.
                &nbsp;<Hashtag href="#day069">#</Hashtag>
              </div>
            </Article>
            <Article id="day070" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">30.03.17</time></Date>The best way to challenge a status quo is to
                stand your ground. The best way to do that is being sure of yourself and know who
                you are. In tech, people talk of learning. Love the process of learning, feel the
                fire for it, and you'll go far. Many may assume this refers to new programming
                languages, design techniques, web strategies, etc. It does. But, something just as
                important receives far less attention. The need to learn about yourself, iterate
                your own thought processes, morals, and wishes. We need to constantly development
                ourselves, not just the technology around us.
                &nbsp;<Hashtag href="#day070">#</Hashtag>
              </div>
            </Article>
            <Article id="day071" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">31.03.17</time></Date>Have you ever thought to yourself; What am I
                doing here? What's the next step? What's the best option? What if I fail? Who should
                I bother? Should I ask that? How did that person do it? Am I good enough? What's my
                value? Where do I fit? What can I offer? Should I play it safe? What if they don't
                like me? How can I possibly be successful? I have. I answer by focusing on my
                passions, seeing everyone as human, and practising empathy. Please believe you are
                as good as everyone else and have great skills to offer.
                &nbsp;<Hashtag href="#day071">#</Hashtag>
              </div>
            </Article>
            <Article id="day072" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">01.04.17</time></Date>Worrying about things can give you mind block. It
                doesn't matter what the things are. Worry begets worry. To-do lists pile up. The
                demons of procrastination and fear snuggle up on your shoulders exchanging sly
                grins. The simple truth is, though, that nothing gets done where worry exists.
                Analysing where your worry comes from is essential. Find it, and explain away your
                reason for it. Write your articles, write your code, read your books, talk to
                people, and refine everything later. Rome wasn't built in a day. You want to build a
                lot, I'm sure. Do it little by little.
                &nbsp;<Hashtag href="#day072">#</Hashtag>
              </div>
            </Article>
            <Article id="day073" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">02.04.17</time></Date>Don't worry about what you can't do yet. The
                knowledge will come. Your job is to enjoy the journey. Learn as much as you can, but
                don't overly strain yourself. Learning isn't a means to an end so much as it is a
                lifestyle. There is no mad sprint to the finish line. Learning is meant to be
                enjoyed, both alone and with others, but especially the latter. The wisest among us
                in the digisphere suggest we slow down, as only then can we do our best work. Take
                your time and treat information as a companion, not a collectable.
                &nbsp;<Hashtag href="#day073">#</Hashtag>
              </div>
            </Article>
            <Article id="day074" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">03.04.17</time></Date>Slowing down in your work is good advice, but it
                applies even more so in your non-work life. The foggy mind and lapses in judgement
                acquired from rushing can affect your work but also affects how you take care of
                yourself and others. This brings to mind the phrase work-life balance. It seems we
                don't just have to balance the boundary between life and work but also the
                boundaries within each one. Slowing down can be hard for some, me included. I
                imagine that if I don't have things done really fast, people will be irritated. Is
                this always true?
                &nbsp;<Hashtag href="#day074">#</Hashtag>
              </div>
            </Article>
            <Article id="day075" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">04.04.17</time></Date>How can we all slow down? UX designer Andy Budd
                wrote that the best design takes the most time. He also mentioned instant
                gratification, something I believe is becoming more pervasive in society today. The
                automation of more and more processes, the creation of more and more effective
                algorithms for carrying out said processes. Humans have always loved a bit of
                convenience. With the technology and know-how at our fingertips we are constantly
                treated to more of it. Will humankind forget how to slow down, or eventually laugh
                off the concept as ridiculous? If we do, we'll certainly lose something.
                &nbsp;<Hashtag href="#day075">#</Hashtag>
              </div>
            </Article>
            <Article id="day076" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">05.04.17</time></Date>I've been offered an incredible opportunity to
                speak at a very meaningful web conference in one of the most beautiful places on
                earth. It's a huge responsibility, and one I will in no way take lightly. I need to
                find a topic and write something for a 20 or 30 minute slot. I'll be brainstorming
                in the coming days. I'd really like to weave in the quietly pertinent matter of
                slowing down and what it might mean for the future of the web. I'm excited to write
                something that will spark a healthy discussion on where the web will go.
                &nbsp;<Hashtag href="#day076">#</Hashtag>
              </div>
            </Article>
            <Article id="day077" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">06.04.17</time></Date>I often feel I am juggling too much at once.
                Although I really like being busy and keeping my mind active, it seems my life
                revolves around balancing various needs. Work, social life, food, exercise, and web
                stuff. I am always wondering how I could be more organised, not that I'm exactly bad
                at it. Is there room for self-improvement in organisation? I'd really like to hear
                thoughts from others. In fact, that's a great idea. Discovering new perspectives
                from other people has only ever sharply increased my own personal growth and
                happiness. The road to happiness involves building bridges.
                &nbsp;<Hashtag href="#day077">#</Hashtag>
              </div>
            </Article>
            <Article id="day078" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">07.04.17</time></Date>I was offered an internship by a design agency
                today. Now I can tell people that I work at a design agency. It's still a bit of a
                dream come true. Although it's a dream I didn't know I had. Things have materialised
                in the past ten months that I didn't plan for. A year ago I was in Warsaw and
                planning to pursue a doctorate in psychology in the UK. There I experienced tiny
                sparks of interest in web design, but nothing more. Now my career has done a total
                180. Life is a circus and I'm an acrobat.
                &nbsp;<Hashtag href="#day078">#</Hashtag>
              </div>
            </Article>
            <Article id="day079" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">08.04.17</time></Date>I doubted for a very long time that it was
                possible to find a job you like so much that it doesn't feel like work. I thought
                that, surely, this kind of phenomenon only occurs in the lives of a select few. I
                don't know how to ascertain this. All I can do is enjoy it and take every
                opportunity I can. There is so much scope in the world of web development to work on
                projects you find meaningful, and to work with people you really connect with. This
                fosters such a positive, giving and dynamic atmosphere between people.
                &nbsp;<Hashtag href="#day079">#</Hashtag>
              </div>
            </Article>
            <Article id="day080" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">09.04.17</time></Date>Today I was reminded how important connecting
                with others really is. There's never been a time I've been able to prove this wrong.
                What I'd like to do is prove it right much more often. In my short time living in
                Brighton, I've become friends with so many great people. Their willingness to share
                and advise has brought me to where I am today. When I am unsure of or nervous about
                something, I gather advice from as many friends as possible. The amalgamation of
                their different perspectives makes me feel I can do anything. Connection is the way
                forward.
                &nbsp;<Hashtag href="#day080">#</Hashtag>
              </div>
            </Article>
            <Article id="day081" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">10.04.17</time></Date>I've been told that newbies to any field,
                including web design, can often bring a fresh perspective to subjects that experts
                have been bogged down with for years. Are experts really not able to see the wood
                for the trees? Where do I see myself nine months into learning about the web? Have I
                begun traversing the woods, going in deeper and watching the branches swallow the
                light behind me? It's definitely fun to think up analogies like this. Where in the
                woods do the most renowned experts sit? This is delicious food for thought and I'll
                never be full.
                &nbsp;<Hashtag href="#day081">#</Hashtag>
              </div>
            </Article>
            <Article id="day082" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">11.04.17</time></Date>I wonder if analogies are effective at helping
                people understand events or circumstances in their lives. I think they are.
                Analogies are simply a different perspective on things. They lift you out of holes
                that you've dug over time. They grant you different ways of looking at problems,
                often allowing you to leave behind frustrating thoughts or ideas that weren't
                getting you anywhere. I now find it easy to understand why experts value the
                contributions of newbies. Nobody at any level of expertise can thrive in isolation.
                The best work is accomplished when many angles are considered. Perspectives are
                powerful.
                &nbsp;<Hashtag href="#day082">#</Hashtag>
              </div>
            </Article>
            <Article id="day083" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">12.04.17</time></Date>The web was once new, unchartered territory. It
                used to be seen as confusing and inflexible. It hadn't yet grown to its modern size.
                Jeffrey Zeldman had a blog in the 1990s that half the web (three million people) had
                read. Almost thirty years on, the web is a lively, dynamic playground. It's still
                confusing, but for different reasons. With thousands of frameworks, libraries and
                CMSs, web development should be easier and more transparent than ever. In some ways
                it is, but the transparency lies at the surface. Not many understand fundamental web
                concepts, how the web works and why.
                &nbsp;<Hashtag href="#day083">#</Hashtag>
              </div>
            </Article>
            <Article id="day084" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">13.04.17</time></Date>What draws people to web development? Reasons are
                plenty. People often reason they enjoy it. But, which aspects? Web development as a
                career is broad and multi-faceted. A fantastic thing about it, echoed in a{' '}
                &nbsp;<Hashtag href="https://youtu.be/6MBaFL7sCb8">talk</Hashtag> by Terri Trespicio, is that you
                don't need to specialise and focus right away. Terri tells us not to feel pressured,
                but just to do things. To grab as many experiences as possible. We shouldn't follow
                our passions, but rather let our passions follow us. The world of web development is
                all about connecting, communication and contributing. Enjoy the experiences, it's a
                fun time.
                &nbsp;<Hashtag href="#day084">#</Hashtag>
              </div>
            </Article>
            <Article id="day085" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">14.04.17</time></Date>In web design there is fun to be had. At the same
                time, though, it's a serious business. With abundance of play comes equal quantities
                of hard work, and designers have to be prepared to accept this. It's potentially all
                too easy to be swept away by the funner parts of the job. This can breed aversion
                and procrastination towards what needs to be done. Similar to much of life, we must
                find balance. We have to surf the wave and enjoy it, but at the same time remain
                focused, lest we fall off our boards into dangerous waters below.
                &nbsp;<Hashtag href="#day085">#</Hashtag>
              </div>
            </Article>
            <Article id="day086" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">15.04.17</time></Date>The distinction between work and play really
                interests me. It reminds me of the line separating childhood and adulthood. In my
                opinion, this should never take the form of a line. It's best when play and work are
                interwoven, even in very young children. This way, a child is prepared to face
                adulthood, and when said adulthood is reached, the magic of childhood is not
                entirely left behind. The immense joys of childhood - discovery, learning,
                adventures, fairytales, close and loving relationships... should those be forgotten?
                Not at all. Embracing our inner child makes us better in life, love and business.
                &nbsp;<Hashtag href="#day086">#</Hashtag>
              </div>
            </Article>
            <Article id="day087" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">16.04.17</time></Date>The connections between psychology and web
                development have recently been at the forefront of my mind. This August, I'll
                present them, carefully weaved together, as a talk. I've wondered how to begin this
                process. The quality of research on public speaking I've unearthed so far has
                actually surprised me. One of my favourites is from Chris Anderson, head of TED
                Talks. His basic premise is that an idea can be presented in such a way that it
                changes someone's world view, and concurrently how they think about things. I would
                love to get my ideas out there and do this.
                &nbsp;<Hashtag href="#day087">#</Hashtag>
              </div>
            </Article>
            <Article id="day088" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">17.04.17</time></Date>What's the best way to get ideas out? The most
                important step is surely writing down the ideas in the first place. Writing an idea
                so that people will understand it and leave thinking about it. Perhaps this is the
                most stressful part of the process, full of worry about coming across as boring or
                out of context. Mindmapping could be a good technique to get ideas out and link them
                all together. For this, it's best to shut the computer and begin drawing. Maybe
                putting technology to one side and grabbing traditional pen and paper would work
                written wonders.
                &nbsp;<Hashtag href="#day088">#</Hashtag>
              </div>
            </Article>
            <Article id="day089" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">18.04.17</time></Date>Being creative and having the motivation to do so
                comes from being in a good place, no? There are periods of time when life gets busy
                and responsibilities bog you down. I can confidently confirm I know what this feels
                like. It's a challenge to push yourself in one direction while trying to remain
                alert to another. There are certain people who just work too hard and think they can
                do everything at once. Who can put their hand up and admit they fit this bill? There
                is no shame in it, just a promise to make to slow down.
                &nbsp;<Hashtag href="#day089">#</Hashtag>
              </div>
            </Article>
            <Article id="day090" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">19.04.17</time></Date>What can we learn from slowing down? It's a
                difficult task to accomplish and one that requires lots of conscious, effortful
                willpower. Especially for those of us whose minds move a thousand miles a minute,
                who lust for knowledge, who feel a deep need to piece information together and
                understand the universe we live in. There have, in the past months, been several
                articles written on the importance of slow design. The idea is to be deliberate
                about what we do. Why work hard when we can work smart? A lazy person can find an
                easy way of doing things.
                &nbsp;<Hashtag href="#day090">#</Hashtag>
              </div>
            </Article>
            <Article id="day091" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">20.04.17</time></Date>The idea of working smart rather than hard really
                interests me. We might be taught that hard work, blood, sweat, tears, can get us to
                where we want. Think 60 hour weeks, demeaning tasks, lack of appreciation and
                exhaustion. Maybe putting a little effort into working smart would reap a lot of
                benefits. Playing to your natural strengths is a good starting point. Thinking about
                what makes you happy, when you are at your most creative, making sure basic needs
                such as fitness and nutrition are in place. It's easy to be busy and let things
                important to wellbeing slip.
                &nbsp;<Hashtag href="#day091">#</Hashtag>
              </div>
            </Article>
            <Article id="day092" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">21.04.17</time></Date>A lot of success boils down to confidence. Being
                sure of the things we do is really important. We do so many little things every day
                and they all end up interconnected. When sure of ourselves, everything flows more
                smoothly and allows us to progress in desired directions. Having respect for
                ourselves means we don't only look out for ourselves but also others. We're able to
                be better learners and teachers. We can more easily contribute value - something I'm
                sure many have the urge to do. Being ourselves is the best thing we can do for us
                and everyone else.
                &nbsp;<Hashtag href="#day092">#</Hashtag>
              </div>
            </Article>
            <Article id="day093" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">22.04.17</time></Date>People are fickle. This is something I heard from
                a seventy year old lady yesterday. This lady also had a school friend who lived next
                to John Lennon before he excelled to fame. By now, she told me, she knows exactly
                who she is. In psychology we might call this self actualisation. Our entire lives
                centre around needing and wanting to know who we are, as Anne Lamott puts it. This
                is the case whether we care to admit it or not. Writing is a great avenue to journey
                down as we attempt this. I'm doing that already, are you?
                &nbsp;<Hashtag href="#day093">#</Hashtag>
              </div>
            </Article>
            <Article id="day094" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">23.04.17</time></Date>What you write may or may not be useful or
                valuable for other people, but it will always be so for you. It could be that not
                everyone really 'gets' it, but that's okay. If your thoughts make just one person
                out of hundreds think about things slightly differently, then I think it's worth
                making them public. I'm coming to the end of my 100 day 100 words challenge but
                don't really want to stop, so I'll think up another writing challenge. I tend to
                cringe a bit when I read what I've already written but that doesn't bother me.
                &nbsp;<Hashtag href="#day094">#</Hashtag>
              </div>
            </Article>
            <Article id="day095" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">24.04.17</time></Date>Writing might be seen as a gargantuan, seemingly
                impossible task by many. However, I've learned recently that there are a thousand
                clever ways to approach it and write something that, after a few tweaks, sounds
                quite excellent. I can imagine the majority of my friends saying to me "I can't
                write". Much the same as they say "I can't draw". I fully believe people can do
                both. We all have a propensity for creativity, thanks to our complex and dynamic
                minds. It's entirely possible to find and utilise techniques for drawing out
                pictures or words. What if everyone tried this?
                &nbsp;<Hashtag href="#day095">#</Hashtag>
              </div>
            </Article>
            <Article id="day096" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">25.04.17</time></Date>I seem to have a nack for meeting and making
                friends born in different countries. I might be drawn to their language, their
                knowledge, their culture. Brighton is a fantastic place to be if you're like me and
                enjoy friends from distant lands. Most recently I met a Bulgarian man and a Spanish
                lady. They both exclaimed how English often surprises them. One played with and
                tripped over words in English that have multiple meanings, for example crane, rose
                or date. The other wrote and gave a talk in English. An impressive feat when English
                is not your first language.
                &nbsp;<Hashtag href="#day096">#</Hashtag>
              </div>
            </Article>
            <Article id="day097" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">26.04.17</time></Date>Memories from travelling often sneak up on me,
                but in a good way. They sneak up and give me a big, warm hug. Random memories
                present themselves as if they were popping by to say hello and ask how I'm doing.
                Today, I remembered my cycle paths between home and work in Berlin. A few days ago,
                I was suddenly subject to a cinema reel of late night kebabs in Leiden. Another time
                I was whisked up into the air, reliving a virtual rendition of my time in a theme
                park in Spain. Memories are like little pieces of soul.
                &nbsp;<Hashtag href="#day097">#</Hashtag>
              </div>
            </Article>
            <Article id="day098" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">27.04.17</time></Date>I'd like to piece together little fragments of
                memories, whether mine or someone else's. Perhaps if I take enough little shards of
                glass from very different places, I'd be able to craft something beautiful that
                nobody has ever seen before. Maybe someone would be able to relate to this person
                through their own experiences. What could this do for such a person? Bring their own
                suffering into perspective, let them know they aren't alone? Help them understand
                other people don't just get but have also experienced similar things. I think these
                are some of the greatest things writing can do.
                &nbsp;<Hashtag href="#day098">#</Hashtag>
              </div>
            </Article>
            <Article id="day099" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">28.04.17</time></Date>Character creation seems to be a tricky exercise.
                Each character needs to have a personality, life history, and flaws all their own.
                Also, a character's dialogue cannot be prescribed. All of these things need to form
                of their own accord, through listening to the character. Or, in other words, by
                listening to many people, then merging these people's thoughts into a character
                until a brand new person is slowly but surely built up. Done right, a character will
                breathe and walk and talk and the author will subconsciously know what to write
                about them. Done right, the character becomes real.
                &nbsp;<Hashtag href="#day099">#</Hashtag>
              </div>
            </Article>
            <Article id="day100" className="h-entry">
              <div className="e-content">
                <Date className="p-name"><time className="dt-published">29.04.17</time></Date>Today is the last day of my writing challenge. I
                can't believe I have written ten thousand words. If I were to read everything out it
                would take me almost an hour. Yet, one hundred words seems like such a small amount.
                An amount that only takes a few minutes to write. This teaches a great lesson. Do a
                little, achieve a little every day. Small steps do lead to greater things. This is
                something essential to remember in the world of web development where tasks and
                learning can appear to be never-ending. Don't stress out, just keep doing stuff.
                &nbsp;<Hashtag href="#day100">#</Hashtag>
              </div>
            </Article>
          </WordsContainer>
        </Content>
      </section>
      <hr />
      <Bio />
    </Wrapper>
  </Layout>
)

export default WordBubblePost
