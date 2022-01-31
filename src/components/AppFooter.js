import React from 'react'

export default function AppFooter({ visits }) {
    return (
        <footer className="site-footer">
                <div>
                    <div>
                        源代碼: <a href='https://github.com/Black-Kalo/search-discord-id' target="_blank" rel="noopener noreferrer">code</a>&nbsp;
                        本網站不是官方 <a className='footer-links' href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
                    </div>
                    <span>今天使用人數: <span className="count">{ visits }</span></span>
                    <div>
                        <span>如果有任何問題,即可加入</span>
                        <a className='footer-links' href='https://discord.gg/ZYw62GGGRx' target="_blank" rel="noopener noreferrer">Support</a>
                    </div>
                    Make by. 黑月Kalo#2006
                </div>
        </footer>
    )
}
