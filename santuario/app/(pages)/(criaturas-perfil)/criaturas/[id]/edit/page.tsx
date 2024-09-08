import EditForm from '@/components/forms/EditForm';
import { fetchCriaturaByID } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function EditPage({ params }: { params: { id: string } }) {
	const criatura = await fetchCriaturaByID(params.id);

	if(!criatura){
    notFound();
  }

	return <EditForm criatura={criatura} />;
}
