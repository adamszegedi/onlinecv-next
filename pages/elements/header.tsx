import Image from 'next/image';
import profilePic from '../data/profile_pic.jpg'

interface HeaderData {"name":string, "bio":string, "src": string};

export default function Header({ name, bio, src }: HeaderData) {
  return (
    <div>
        <picture className='profile-pic'>
          <Image
          src={profilePic}
          alt="Adam Szegedi"
          style={{objectFit:"contain", width: "100px", height: "auto"}}
          />
        </picture>
        <div>
        <h1>
          {name}
        </h1>
      </div>
      <div>{bio}</div>
    </div>
  );
}
