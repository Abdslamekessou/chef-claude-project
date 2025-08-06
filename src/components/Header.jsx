import ChefClaudeImg from '../assets/chef-claude-icon.png'
import './Header.css'
export default function Header(){
    return(
            <header>
                <img src={ChefClaudeImg} alt="chef-claude-img" />
                <h2>Chef Claude</h2>
            </header>
    )
}