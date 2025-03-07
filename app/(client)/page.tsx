import Container from "@/components/common/Container";
import HomeBanner from "@/components/common/HomeBanner";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div>
			<Container className="py-10">
				<HomeBanner />
			</Container>
		</div>
	);
}
