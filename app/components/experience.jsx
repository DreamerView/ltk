const experienceStory = () => {
    return(
        <section className="experienceStory">
            <h1>My Work Experience</h1>
            <div className="storyLineBlock">
                <div className="storyLine">
                    <div className="storyText">
                        <h2>Self-Employed, NYC</h2>
                        <p>Insightancer</p>
                    </div>
                    <div className="timeBlock">
                        <div className="circleStoryLine">
                            <div className="circleStoryBrand"></div>
                        </div>
                        <div className="storyEnder"></div>
                    </div>
                    <div className="storyText">
                        <h2>Visual Designer</h2>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className="storyLine">
                    <div className="storyText">
                        <h2>Self-Employed, NYC</h2>
                        <p>Insightancer</p>
                    </div>
                    <div className="timeBlock">
                        <div className="circleStoryLine">
                            <div className="circleStorySub"></div>
                        </div>
                        {/* <div className="storyEnder"></div> */}
                    </div>
                    <div className="storyText">
                        <h2>Visual Designer</h2>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default experienceStory;