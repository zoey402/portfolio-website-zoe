import React from 'react';
import Accordion from './Accordion';
import './FAQs.css';

function FAQs() {

    return (
        <div className="faqs__container">
            <h2 className="faqs__title">Frequently Asked Questions</h2>
            <Accordion title="Do You Have Any Location Preferences for Work?">
                <p className="faqs__answer">My ideal work locations are in Seattle, WA, and surrounding cities like Bellevue, Kirkland, and Redmond. I am also very open to remote work arrangements, which I believe offer great flexibility and can be highly productive. </p>
                <p className="faqs__answer">While I have a preference for these locations, I am definitely open to considering attractive opportunities anywhere in the US. I believe that the right opportunity can make relocation a rewarding experience, and I'm willing to adapt to new environments where I can grow professionally and contribute effectively.</p>
            </Accordion>
            <Accordion title="What Kind of Positions Are You Seeking?">
                <p className="faqs__answer">I am actively pursuing a Software Development Engineer (SDE) internship for the summer of 2024, ideally between May and September. My passion lies in crafting efficient and innovative software solutions, and I am eager to apply my skills in a real-world setting. </p>
                <p className="faqs__answer">Alongside software development, I have a keen interest in the fields of Machine Learning, Artificial Intelligence, and Data Analysis. I am enthusiastic about exploring roles that allow me to delve into these areas, as I believe they are pivotal in shaping the future of technology. My goal is to contribute to projects where I can both leverage and expand my knowledge in software engineering, while also exploring the fascinating capabilities of AI and data-driven technologies.</p>
            </Accordion>
            <Accordion title="What Programming Languages Are You Proficient In?">
                <p className="faqs__answer">I am proficient in JavaScript, Python, and Java. JavaScript is my go-to language for web development, Python for data analysis and scripting, and Java for building robust backend solutions.</p>
            </Accordion>
            <Accordion title="Why Should We Choose You for Our Team?">
                <p className="faqs__answer">You should choose me for your team not only because of my technical skills and passion for software development but also due to my strong documentation habits. I firmly believe in the power of clear and concise documentation for tracking work ideas, progress, methods, and results. This habit extends beyond my professional tasks into my personal life, underscoring its importance to me. </p>
                <p className="faqs__answer">By maintaining thorough documentation, I can increase productivity and reduce communication costs, ensuring that team members are always on the same page and that project details are easily accessible. This approach has repeatedly proven to be invaluable in streamlining workflows and enhancing team coordination, making me a reliable and efficient addition to any project.</p>
            </Accordion>
            <Accordion title="What is Your Experience With Team Collaboration?">
                <p className="faqs__answer">I have collaborated with diverse teams on various projects. I believe in open communication, regular stand-ups, and using collaboration tools like Git, JIRA, and Slack. I adapt to team dynamics and contribute to a positive and productive environment.</p>
            </Accordion>
            <Accordion title="What's Your Approach to Learning a New Programming Language or Framework?">
                <p className="faqs__answer">When learning a new language or framework, I start with official documentation to understand the fundamentals. I then work on small projects or contribute to open-source projects to apply my learning in practical scenarios. I also find online courses and community discussions helpful.</p>
            </Accordion>
        </div>
    );
}

export default FAQs;