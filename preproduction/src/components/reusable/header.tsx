import './header.scss';

type HeaderProps = {
    title1: String;
    title2: String; 
  }

function Header({title1,title2}: HeaderProps){
    return(
        <div className='header'>
            <p className='dct' > <span style={{fontWeight: 'bold'}}>{title1}</span>{` ${title2}`}</p>
        </div>
    );
}

export default Header;