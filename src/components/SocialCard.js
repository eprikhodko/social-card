import React from 'react'
import '../components/SocialCard.css'
// images
import UserAvatarImage from '../components/images/user-avatar.jpg'
import ScrimbaMerch from '../components/images/scrimba-merch.jpg'
// icons
import {ReactComponent as IconThreeDots} from '../components/icons/icon-three-dots.svg'
import {ReactComponent as IconReply} from '../components/icons/icon-reply.svg'
import {ReactComponent as IconRetweet} from '../components/icons/icon-retweet.svg'
import {ReactComponent as IconLike} from '../components/icons/icon-like.svg'
import {ReactComponent as IconShare} from '../components/icons/icon-share.svg'


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
        <div className="post-body">
            <p>Did you know Scrimba has a store 🤫?https://shop.spreadshirt.com/scrimba/</p> 
            <p>Respond with a *screenshot* of your favourite item and you'll stand a chance to win it 🎉</p>
            <p>Winner announced at random on Friday!</p>
            <div className="post-body-image-container">
                <img className="post-body-image" src={ScrimbaMerch} alt="scrimba merch"></img>
            </div>
        </div>
    )
}

function PostFooter() {
    return (
        <div className="post-footer">
            <PostReply />
            <PostRetweet />
            <PostLike />
            <PostShare />
        </div>
    )
}

function PostAuthor() {
    return (
        <p className="post-author"><span className="post-author-name">Mr. Whiskerson</span><span className="post-author-url"> @mr_whiskerson</span></p>
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
        <div className="button-three-dots-container">
            <IconThreeDots className="button-three-dots"/>
        </div>
    )
}

function PostReply() {
    return (
        <div className="button-post-footer-container">
            <div className="button-post-footer button-reply">
                <IconReply className="icon"/>
            </div>
            <p className="post-counter reply-counter">25</p>
        </div>
        
    )
}

function PostRetweet() {
    return (
        <div className="button-post-footer-container">
            <div className="button-post-footer button-retweet">
                <IconRetweet className="icon"/>
            </div>
            <p className="post-counter retweet-counter">6</p>
        </div>
    )
}

function PostLike() {
    return (
        <div className="button-post-footer-container">
            <div className="button-post-footer button-like">
                <IconLike className="icon"/>
            </div>
            <p className="post-counter like-counter">24</p>
        </div>
    )
}

function PostShare() {
    return (
        <div className="button-post-footer-container">
            <div className="button-post-footer">
                <IconShare className="icon"/>
            </div>
        </div>
    ) 
}

export default SocialCard