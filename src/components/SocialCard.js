import React from 'react'
import '../components/SocialCard.css'
import UserAvatarImage from '../components/user-avatar.jpg'
import ScrimbaMerchImage from '../components/scrimba-merch.jfif'

function SocialCard() {
    return (
        <div className="social-card">
               <Article />
            </div>
    )
}

function Article() {
    return (
        <article>
            <UserAvatar />
            <Post />
        </article>
        
    )
}

function UserAvatar() {
    return (
        <div className="avatar-container">
            <img className="user-avatar" src={UserAvatarImage} alt="user avatar"></img>
        </div>
    )
}

function Post() {
    return (
        <div className="post">
            <PostHeader />
            <PostBody />
            <PostFooter />
        </div>
    )
}

function PostHeader() {
    return (
        <div className="post-header">
            <PostAuthor />
            <DotSpacer />
            <PostDate />
            <ButtonMore />
        </div>
    )
}

function PostBody() {
    return (
        <div>
            <p>🎨Reckon you can turn some boring links into some totally awesome buttons? 🔥</p> 
            <p>Give it a go here: </p>
            <p>#WeeklyWebDevChallenge</p>
            <p>https://bit.ly/3cCGRAM</p>
            <div className="post-body-image-container">
                <img className="post-body-image" src={ScrimbaMerchImage} alt="buttons styling"></img>
            </div>
            
        </div>
    )
}

function PostFooter() {
    return (
        <div>
            <PostReply />
            <PostRetweet />
            <PostLike />
            <PostShare />
        </div>
    )
}

function PostAuthor() {
    return (
        <p className="post-author">Mr. Whiskerson<span className="post-author-url"> @mr_whiskerson</span></p>
    )
}

function DotSpacer() {
    return (
        <p className="dot-spacer">·</p>
    )
}

function PostDate() {
    return (
        <p className="post-date">Apr 1</p>
    )
}

function ButtonMore() {
    return (
        <div className="button-three-dots">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>
        </div>
            
        
        
        // <img className="three-dots-view-more-button" src={ThreeDotsMoreButton} alt="view more"></img>
        // <button className="button-more" type="button">...</button>
        // <p className="button-more">···</p>
    )
}

function PostReply() {
    return (
        <div>
            <ButtonReply />
            <ReplyCount />
        </div>
    )
}

function PostRetweet() {
    return (
        <div>
            <ButtonRetweet />
            <RetweetCount />
        </div>
    )
}

function PostLike() {
    return (
        <div>
            <ButtonLike />
            <LikeCount />
        </div>
    )
}

function PostShare() {
    return (
        <div>
            <ButtonShare />
            <ShareCount />
        </div>
    ) 
}

function ButtonReply() {
    return (
        <button type="button">Reply button</button>
    )
}

function ReplyCount() {
    return (
        <p>reply count</p>
    )
}

function ButtonRetweet() {
    return (
        <button type="button">Retweet button</button>
    )
}

function RetweetCount() {
    return (
        <p>retweet count</p>
    )
}

function ButtonLike() {
    return (
        <button type="button">Like button</button>
    )
}

function LikeCount() {
    return (
        <p>Like count</p>
    )
}

function ButtonShare() {
    return (
        <button type="button">Share button</button>
    )
}

function ShareCount() {
    return (
        <p>Share count</p>
    )
}

export default SocialCard