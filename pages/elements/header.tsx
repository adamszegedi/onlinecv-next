import Image from 'next/image';
import profilePic from '../data/profile_pic.jpg'

interface HeaderData {"name":string, "bio":string, "src": string};

export default function Header({ name, bio, src }: HeaderData) {
  return (
    <div className="grid-header">
      <div className="item-pic">
        <picture className='profile-pic'>
          <Image
          src={profilePic}
          alt="Adam Szegedi"
          style={{objectFit:"contain", width: "100%", height: "auto"}}
          />
        </picture>
      </div>
      <div className="item-card name">
        <h1>
          {name}
        </h1>
      </div>
      <div className="item-pres">{bio}</div>
    </div>
  );
}
