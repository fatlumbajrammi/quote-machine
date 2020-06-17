import React from 'react';
import './App.css';
import logo from './twitter.png'
const quotes = [['Nikola Tesla',
                'If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.',
                'The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.',
                'Be alone, that is the secret of invention; be alone, that is when ideas are born.',
                'The present is theirs; the future, for which I really worked, is mine.',
                'If your hate could be turned into electricity, it would light up the whole world.'
                ],
                ['Albert Einstein',
                  'A person who never made a mistake never tried anything new.',
                  'Two things are infinite: the universe and human stupidity; and I’m not sure about the universe.',
                  'I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.',
                  'I have no special talent. I am only passionately curious',
                  'A little knowledge is a dangerous thing.'
                ],
                ['Bill Gates',
                'Don’t compare yourself with anyone in this world…if you do so, you are insulting yourself.',
                ' choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it',
                'Success is a lousy teacher. It seduces smart people into thinking they can’t lose.',
                'We make the future sustainable when we invest in the poor, not when we insist on their suffering.',
                'We all need people who will give us feedback. That’s how we improve.'
                ],
                ['Steve Jobs',
                'Don’t let the noise of others’ opinions drown out your own inner voice.',
                'Creativity is just connecting things.',
                'Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.',
                'Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it’s worth it in the end because once you get there, you can move mountains.',
                'Your time is limited, so don’t waste it living someone else’s life.'
                ],
                ['Thomas Edison',
                'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
                'I have not failed. I\'ve just found 10,000 ways that won\'t work.',
                'Opportunity is missed by most people because it is dressed in overalls and looks like work.',
                'Maturity is often more absurd than youth and very frequently is most unjust to youth.',
                'I never did anything by accident, nor did any of my inventions come by accident; they came by work.'
                ]
              ];
let author = Math.floor(Math.random() * 5);
let quote = Math.ceil(Math.random() * 4);
function App() {
  return (
    <NextQuote />
  );
}

class NextQuote extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        author:quotes[author][0],
        quote: quotes[author][quote]
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
      let authorc = Math.floor(Math.random() * 5);
      let quotec = Math.ceil(Math.random() * 4);

    this.setState({
    author:quotes[authorc][0],
    quote:quotes[authorc][quotec],
    })
    }
    render() {
      return (
        <div id="wrapper">
          <div id="quote-box">
            <div className="quote-text">
            <span id="text">
            {this.state.quote}
            </span>

            <div className="quote-author">
              - <span id="author">{this.state.author}</span>
            </div>

            </div>

            <div className="buttons">
              <a href={`https://twitter.com/intent/tweet?text=${this.state.quote}&hashtags=${this.state.author}`}
              className="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
                <img src={logo} alt="twitter logo" />
              </a>
              <button onClick = {this.handleClick} className="button" id="new-quote">New quote</button>
            </div>
          </div>

        </div>
      );
    }
  }
export default App;
