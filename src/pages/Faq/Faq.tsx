import FaqItem from "@/components/FaqItem/FaqItem";
import faq from "@/constants/faq";

const Faq = () => {

    return (
        <main style={{ maxWidth: 329, margin: "87px auto 118px auto" }}>
        {
            faq.map((el, idx) => 
                <FaqItem 
                    key={idx} 
                    title={el.title}
                    content={el.content}
                />
            )
        }
        </main>
    );
};

export default Faq;
