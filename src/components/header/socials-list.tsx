import { Socials } from '@lib/socials';
import { SocialItem } from './social-item';
import '@assets/styles/components/socials.css';

export default function SocialsList() {
	return (
		<ol className='socials'>
			{Socials.map(social => (
				<SocialItem icon={social.icon} />
			))}
		</ol>
	);
}
