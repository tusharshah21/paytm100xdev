import {PrismaClient} from  "@repo/db/client"

const client=new PrismaClient();
export default function Page(): JSX.Element {
  return (
    <div>
      <h1 className="text-2xl">tushar here</h1>
    </div>
  );
}
