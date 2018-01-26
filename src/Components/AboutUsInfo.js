import React from 'react';

const AboutUsInfo = () => {

    const listInfo = [
        {
            titleCard: 'about us',
            className: 'about-one-text',
            classText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.'
        },
        {
            titleCard: 'vision',
            className: 'about-two-text',
            classText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.'

        },
        {
            titleCard: 'mission',
            className: 'about-three-text',
            classText: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
        }
    ];

    return (

        <div className="info-about listInfo">
            {
                listInfo.map((item, index) => {
                    return (
                        <div className={item.className} key={index}>
                            <h3 className="title title-bloc">{item.titleCard}</h3>
                            <p className="text-section">{item.classText}</p>
                        </div>
                    );
                })
            }
        </div>

   );
};

export default AboutUsInfo;