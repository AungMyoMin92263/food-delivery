import styled from 'styled-components';


export const BottomSytled = styled.div`
    position:fixed;
    bottom:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
    height:60px;
    width:100%;
    background:#d5d5d5;
    border-radius: 25px 25px 0 0;
    z-index:101;

    ul{
        display:flex;

    }

    ul li{
        position:relative;
        width:60px;
        height:60px;
        z-index:1;
    }

    ul li a{
        position:relative;
        align-item:center
        justify-content:center;
        width:100%;
        flex-direction:column;
        text-align:center;
        font-weight:500;

    }

    ul li a .icon{
        position: relative:
        display:block;
        line-height:70px;
        text-align:center;
        transition:0.5s;

    }
    ul li a .icon .MuiSvgIcon-root{
        font-size:26px;
        color:#373848;
    }
    ul li:hover a .icon {
        transform: translateY(-26px)
    }

    ul li:hover a .icon .MuiSvgIcon-root{
        color:#faf9fb;
        transition:0.5s
    }

    .indicator{
        position:absolute;
        height:60px;
        width:60px;
        background:#f8901c;
        border-radius: 100vw;
        top:-50%;
        border: 6px solid #faf9fb:
    }
`