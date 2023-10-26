import { faqQuestions } from "../../utils/faq-questions";

import "./faq.styles.css";

import MissedFAQ from "../faq-miscellaneous/faq-miscellaneous.component";
const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="faq-container-body">
        <header>Frequently Asked Questions</header>
        <div className="faq-questions">
          {faqQuestions.map((faqQuestion) => {
            const { id, question, ans } = faqQuestion;
            return (
              <div key={id} className="faq-question-container">
                <p className="faq-question">{`${id}. ${question}`}</p>
                <p className="faq-answer">{ans}</p>
                <div className="question-hr-line"></div>
              </div>
            );
          })}
          <MissedFAQ />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
