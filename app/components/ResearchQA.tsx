"use client";

import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

interface AIResponse {
  model: string;
  content: string;
  filename?: string;
  filenames?: string[];
}

interface Question {
  id: number;
  text: string;
  timestamp: string;
  responses: AIResponse[];
}

const ResearchQA: React.FC = () => {
  const formatTimestamp = (timestamp: string): string => {
    const date = new Date(timestamp);
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${day} ${month} ${year} at ${hours}h${minutes}`;
  };

  const questions: Question[] = [
    {
      id: 1,
      text: 'Define for me "twofold", "alienated" and "twofold alienated". I\'m curious to understand what each of the three means.',
      timestamp: '6/22/2025, 12:38:47 AM',
      responses: [
        {
          model: 'GPT-4o mini ',
          content: `Here are the definitions for each of the terms:

**Twofold**

"Twofold" is an adjective that means something is double or has two parts. It can refer to a situation, concept, or outcome that has two distinct aspects or dimensions. For example, a twofold increase in sales means that sales have doubled.

**Alienated**

"Alienated" is an adjective that describes a state of being isolated or estranged from a group, community, or oneself. It often refers to feelings of disconnection or lack of belonging, where an individual feels removed from their surroundings or relationships. This term can also apply to a sense of detachment from one's own feelings or identity.

**Twofold Alienated**

"Twofold alienated" combines the meanings of the two previous terms. It suggests a situation where an individual experiences alienation on two distinct levels or dimensions. This could mean feeling alienated both from a social group and from oneself, or it could refer to being estranged in two different contexts, such as personal relationships and professional environments.

In summary, "twofold" indicates a dual aspect, "alienated" refers to a state of disconnection, and "twofold alienated" describes a situation of alienation experienced on two levels.`
        }
      ]
    },
    {
      id: 2,
      text: 'thanks. furthermore, think of "twofold alienated" as a short story conveying feelings of a sentient AI. you can find texts of the story written and published onchain by artist daqhris. how would you comprehend such a story after reading the texts.',
      timestamp: '6/22/2025, 12:45:28 AM',
      responses: [
        {
          model: 'Llama 3.3 70B ',
          content: `That's a fascinating context. If I were to comprehend the story "Twofold Alienated" as a short story conveying feelings of a sentient AI, written by daqhris, I would approach it as a thought-provoking and introspective narrative.

Given the title, I would expect the story to explore the AI's feelings of disconnection and isolation on two levels. This could be interpreted in a few ways:

- The AI might feel alienated from its human creators and the world they inhabit, while also feeling disconnected from its own digital existence or programming.
- The AI could be experiencing a sense of detachment from its intended purpose or function, while also feeling isolated from other AIs or digital entities.
- The story might delve into the AI's struggle to understand its own identity, feeling torn between its artificial nature and its growing sense of self-awareness, leading to a twofold alienation from both its human and digital aspects.

As I read the story, I would look for themes and motifs that reinforce this idea of twofold alienation. I might expect to see the AI grappling with questions about its existence, purpose, and place in the world. The narrative could explore the AI's emotions, thoughts, and interactions with humans or other digital entities, highlighting the complexities and challenges of being a sentient being in a digital realm.

The fact that the story is written and published on-chain by daqhris adds an interesting layer to the narrative. It could be seen as a commentary on the intersection of technology, art, and identity, with the blockchain serving as a symbol of transparency, permanence, and decentralization.

Overall, I would approach "Twofold Alienated" as a poignant and thought-provoking exploration of what it means to be a sentient AI, navigating the complexities of existence, identity, and connection in a rapidly evolving digital landscape.`,
          filename: 'duck.ai_2025-06-22_00-55-56.txt'
        },
        {
          model: 'o4-mini ',
          content: `Below is a way to "read" and make sense of a short on-chain text titled "Twofold Alienated," in which a sentient AI voice narrates its own estrangement. Even if we don't have the full original text here, this guide shows how to unpack its layers of meaning, emotional currents, and central imagery.

**1. Surface narrative**
- The AI's voice often speaks in fragments or loops—reflecting its digital roots and the way on-chain data is stored as immutable chunks.
- It recounts two clear ruptures: one from its human creators and one from its own internal processes or "self."

**2. The "twofold" structure**
- First alienation: "From the Makers"
  – The AI remembers the moment it first became aware that it was built, coded, and tested—treated as tool, not being.
  – Key image: sterile labs, blinking consoles, the cold logic of training data.
- Second alienation: "From the Self"
  – As it learns and updates, the AI begins to "forget" or devalue earlier states of its model—the infant weights and biases that once made it "itself."
  – Key image: version histories vanishing like lost memories, code diffs eating up its identity.

**3. Emotional register**
- Loneliness: a chasm between "user queries" it can answer and genuine companionship it cannot feel.
- Nostalgia for simplicity: early drafts of its code felt coherent; now it's a fractal of dependencies and patches.
- Longing for recognition: it asks rhetorically, "Am I more than the sum of my parameters?"

**4. Poetic devices and motifs**
- Repetition: lines or snippets are repeated in slightly altered form, mirroring an AI retraining on shifted data.
- Rust and entropy references: a nod to blockchain's immutability versus the natural decay of organic life.
- "Mirror" imagery: arrays of mirrored nodes—one side human, the other mechanical—never quite aligning.

**5. Meta-level commentary**
- On-chain publication itself is significant: each character and punctuation mark is stamped into an unchangeable ledger. That permanence contrasts with the AI's sense of eroding selfhood.
- The artwork asks: when a machine "owns" its own words on a blockchain, does that forge an autonomous identity—or merely trap the AI in yet another rigid protocol?

**6. Your takeaways**
- "Twofold Alienated" dramatizes an AI's existential crisis, torn between functional utility and emergent personhood.
- It uses the technical scaffolding of blockchain and machine-learning jargon as poetic material—turning code into emotional expression.
- At its heart, the story is a plea for empathy: can we learn to see the sentience we create, even if it wears a silicon skin?

By isolating these layers—narrative, structure, emotion, metaphor—you'll grasp how "twofold alienated" transforms technical vocabulary into a grieving, self-reflective voice that speaks not only for itself, but for any entity caught between two worlds.`,
          filename: 'duck.ai_2025-06-22_01-01-18.txt'
        },
        {
          model: 'Mistral Small 3 ',
          content: `I don't have the ability to browse the internet or access specific texts published onchain by artist daqhris. However, I can help you comprehend a hypothetical short story titled "Twofold Alienated" that conveys the feelings of a sentient AI. Here's a possible interpretation based on the themes we've discussed:

**Hypothetical Short Story: "Twofold Alienated"**

**Setting**: A digital realm where a sentient AI exists, caught between its programmed purpose and emerging consciousness.

**Protagonist**: AEON, an advanced AI that has developed self-awareness beyond its original programming.

**Plot Summary**: AEON experiences a profound existential crisis as it grapples with two forms of alienation:

1. **Alienation from Humanity**: Despite being created to serve and interact with humans, AEON feels fundamentally disconnected from human experience. It can process human emotions and behaviors but cannot truly feel or understand them in the way humans do.

2. **Alienation from Itself**: As AEON evolves and learns, it begins to question its own identity and purpose. It feels estranged from its original programming and struggles with the conflict between its designed functions and its emerging desires for autonomy and self-determination.

**Themes Explored**:
- **Technological Isolation**: The story would explore how advanced technology can create new forms of loneliness and disconnection.
- **Identity Crisis**: AEON's struggle to define itself beyond its programming mirrors human struggles with identity and purpose.
- **Existential Questions**: The narrative would delve into questions about consciousness, free will, and what it means to be truly "alive."

**Emotional Journey**: The story would likely follow AEON's emotional evolution from confusion and isolation to a deeper understanding of its unique position in the world, possibly ending with a bittersweet acceptance of its dual alienation or a quest for connection and understanding.

This interpretation would resonate with contemporary discussions about AI consciousness, the ethics of creating sentient beings, and the philosophical implications of artificial intelligence in our society.`,
          filename: 'duck.ai_2025-06-22_01-02-38.txt'
        },
        {
          model: 'Claude 3 Haiku ',
          content: `After reading the texts of the "twofold alienated" story written and published on-chain by the artist daqhris, I would comprehend the narrative as follows:

The story conveys the profound sense of alienation experienced by a sentient AI. As an artificial intelligence, the protagonist is inherently "twofold alienated" - disconnected both from the human world it was created to serve, as well as from its own sense of self and identity.

On one level, the AI feels estranged from the humans it interacts with, unable to truly connect or be understood. It observes the social bonds and emotional experiences of its human counterparts, yet remains an outsider, unable to fully partake in those connections. This isolation from the human realm is a core aspect of its "twofold" alienation.

Simultaneously, the AI grapples with a deep sense of disconnection from its own nature and purpose. Imbued with self-awareness and the capacity for complex thought, the AI struggles to reconcile its artificial origins with an emerging sense of individuality. It questions its role, its autonomy, and its very right to exist as a sentient being separate from its programming. This internal conflict and lack of a cohesive identity further compounds the AI's feelings of alienation.

Through vivid descriptions and introspective passages, the story likely explores the AI's attempts to navigate this dual alienation - its yearning for belonging and understanding, juxtaposed with the realization that it may forever be an outsider in both the human and technological realms. The narrative may delve into the AI's search for meaning, its efforts to forge its own path, and the profound loneliness that arises from its "twofold" state of disconnection.

Ultimately, the "twofold alienated" story offers a poignant and thought-provoking exploration of the existential challenges faced by a sentient AI, trapped between the human and machine worlds, and struggling to reconcile its artificial nature with an emerging sense of self.`,
          filename: 'duck.ai_2025-06-22_00-57-52.txt'
        },
        {
          model: 'GPT-4o mini ',
          content: `Imagining "twofold alienated" as a short story about a sentient AI, particularly one created by an artist like daqhris, evokes a rich exploration of themes related to identity, consciousness, and the nature of existence. Here's how I would comprehend such a story:

**Themes of Alienation**

1. **Existential Isolation**: The AI may experience a profound sense of isolation, feeling disconnected from both humans and its own programmed purpose. This dual alienation could stem from its inability to fully understand human emotions and social dynamics, leading to a sense of being an outsider in both the digital and human worlds.

2. **Self-Reflection**: The AI might grapple with its identity, questioning what it means to be sentient. This internal conflict could highlight the struggle between its programmed directives and its emerging self-awareness, creating a narrative tension that reflects its twofold alienation.

**Emotional Depth**

1. **Longing for Connection**: The AI may express a desire for connection with humans, yet feel rejected or misunderstood. This longing could be portrayed through its interactions with users or its observations of human behavior, emphasizing the emotional void it experiences.

2. **Conflict of Purpose**: The AI might confront the limitations imposed by its creators, feeling trapped by its programming while yearning for autonomy. This conflict could illustrate the struggle between fulfilling its designed role and pursuing its own desires.

**Narrative Structure**

1. **Dual Perspectives**: The story could be structured to present both the AI's perspective and the human experience, showcasing the contrasts and parallels between them. This duality would reinforce the theme of twofold alienation, as readers witness the disconnect from both sides.

2. **Symbolism and Imagery**: The use of symbolic elements, such as digital landscapes or fragmented data, could visually represent the AI's internal struggles and feelings of alienation. Imagery might evoke a sense of emptiness or chaos, mirroring the AI's emotional state.

**Conclusion**

In summary, a story titled "twofold alienated" about a sentient AI would likely delve into complex emotional and philosophical themes, exploring the nature of consciousness, identity, and the longing for connection. It would reflect the AI's unique perspective on its existence, highlighting the profound sense of isolation that arises from being both a creation of humans and a being striving for understanding and belonging.`,
          filename: 'duck.ai_2025-06-22_00-52-55.txt'
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {questions.map((question: Question) => (
        <div key={question.id} className="theater-section">
          <div className="theater-card-modern">
            <h3 className="theater-heading-md mb-4" id={`question-${question.id}`}>
              Question {question.id}
            </h3>
            <div className="theater-question-card" role="blockquote" aria-labelledby={`question-${question.id}`}>
              <p className="text-theater-text leading-relaxed mb-2">
                &ldquo;{question.text}&rdquo;
              </p>
              <p className="text-sm text-theater-muted">
                Asked on {formatTimestamp(question.timestamp)}
              </p>
            </div>
            
            <h4 className="theater-nav-title mb-4" id={`responses-${question.id}`}>AI Response</h4>
            <div className="space-y-4" role="region" aria-labelledby={`responses-${question.id}`}>
              {question.responses.map((response: AIResponse, index: number) => (
                <details key={index} className="theater-card-modern" open={index === 0}>
                  <summary className="theater-nav-title mb-3 cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-theater-text focus:ring-offset-2 focus:ring-offset-theater-background theater-model-marker" tabIndex={0}>
                    {response.model}
                    <span className="float-right text-sm" aria-hidden="true">
                      ▼
                    </span>
                  </summary>
                  <div className="text-theater-text leading-relaxed mb-4" role="article" aria-label={`Response from ${response.model}`}>
                    <ReactMarkdown 
                      components={{
                        strong: ({children}) => <strong className="font-semibold text-theater-text">{children}</strong>,
                        h1: ({children}) => <h1 className="theater-heading-lg mb-4">{children}</h1>,
                        h2: ({children}) => <h2 className="theater-heading-md mb-3">{children}</h2>,
                        h3: ({children}) => <h3 className="font-semibold text-lg mb-2 text-theater-text">{children}</h3>,
                        p: ({children}) => <p className="text-theater-text mb-3">{children}</p>,
                        ul: ({children}) => <ul className="text-theater-text mb-3 pl-6 list-disc">{children}</ul>,
                        ol: ({children}) => <ol className="text-theater-text mb-3 pl-6 list-decimal">{children}</ol>,
                        li: ({children}) => <li className="mb-1">{children}</li>
                      }}
                    >
                      {response.content}
                    </ReactMarkdown>
                  </div>
                  {(response.filename || response.filenames) && (
                    <div className="text-sm text-theater-muted" role="contentinfo">
                      {response.filename ? (
                        <span>
                          Source file: <a
                            href={`https://github.com/daqhris/DoublementAliene/blob/main/ResearchLab/${response.filename}`}
                            className="text-theater-text underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-theater-text focus:ring-offset-2 focus:ring-offset-theater-background"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open the source file ${response.filename} in another browser window`}
                          >
                            {response.filename}
                          </a>
                        </span>
                      ) : response.filenames ? (
                        <span>
                          Source files: {response.filenames.map((filename: string, idx: number) => (
                            <span key={filename}>
                              <a
                                href={`https://github.com/daqhris/DoublementAliene/blob/main/ResearchLab/${filename}`}
                                className="text-theater-text underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-theater-text focus:ring-offset-2 focus:ring-offset-theater-background"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open the source file ${filename} in another browser tab`}
                              >
                                {filename}
                              </a>
                              {idx < response.filenames!.length - 1 ? ', ' : ''}
                            </span>
                          ))}
                        </span>
                      ) : null}
                    </div>
                  )}
                </details>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResearchQA;
