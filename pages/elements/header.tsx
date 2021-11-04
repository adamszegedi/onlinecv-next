import Image from 'next/image';

interface HeaderData {"name":string, "bio":string, "src": string};

export default function Header({ name, bio, src }: HeaderData) {
  return (
    <div className="grid-header">
      <div className="item-pic">
        <picture>
        <Image
        src={src}
        alt="Adam Szegedi"
        width="200"
        height="200"
        layout='intrinsic'
        className="profile-pic"
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
