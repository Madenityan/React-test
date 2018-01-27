import React from 'react';

const Clients = () => {


    const listClients = [
        {
            textCard: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took',
            classimg: 'img/clients-1.png'
        },
        {
            textCard: 'Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites obscure Latin words.',
            classimg: 'img/client-2.png'

        },
        {
            textCard: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
            classimg: 'img/client-3.png'
        },
        {
            textCard: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going',
            classimg: 'img/client-4.png'
        }

    ];




    return (

        <ul className="list-clients listClients">
            {
                listClients.map((item, index) => {

                    return (
                        <li key={index}>
                            <div className="img-clients">
                                <img src={item.classimg} alt="client"/>
                            </div>
                            <div className="quote-clients">
                                <blockquote className="text-section">
                                    {item.textCard}
                                </blockquote>
                                <cite className="client-name">client name</cite>
                                <span className="designation">Designation</span>
                            </div>
                        </li>
                    );
                })
            }
        </ul>

    );
};




export default Clients;