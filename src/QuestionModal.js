import React, {Component} from 'react';


class QuesctionModal extends Component{
    render(){
        return(
            <section className='modalOverlay'>
                <div className="modalContent">
                    <h2>YASSS QUEEEN</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cum eveniet rem alias omnis impedit placeat eum molestiae ut eos expedita veritatis saepe, reprehenderit voluptatem inventore asperiores sit harum dolor.</p>

                    <ul>
                        <li>
                            <label htmlFor='questionOne'>QuestionOne</label>
                            <input type="checkbox" id='questionOne'/>
                        </li>
                        <li>
                            <label htmlFor='questionTwo'>QuestionTwo</label>
                            <input type="checkbox" id='questionTwo' />
                        </li>
                        <li>
                            <label htmlFor='questionThree'>QuestionThree</label>
                            <input type="checkbox" id='questionThree' />
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}


export default QuesctionModal;