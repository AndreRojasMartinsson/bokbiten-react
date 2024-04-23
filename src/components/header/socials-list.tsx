import Button from '@components/button';
import { Socials } from '@config/socials';

export default function SocialsList() {
	return (
		<ol className='socials'>
			{Socials.map(icon => (
				<li>
					<Button
						intent='primary'
						size='small'
						shape='square'
					>
						{icon}
					</Button>
				</li>
			))}
		</ol>
	);
}
