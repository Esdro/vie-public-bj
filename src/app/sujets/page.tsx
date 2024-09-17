import Image from "next/image";
import React from "react";

interface Props {
  // Define your component's props here
}

const SujetComponent: React.FC<Props> = (props) => {
  // Component logic goes here

  return (
    // JSX markup goes here
    <div className=" w-full p-4 ">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className=" !flex items-center gap-8 flex-row  relative">
            <Image
              src="https://picsum.photos/200"
              alt="avatar"
              className=" absolute left-0 top-0 mb-4 right-0 rounded-full"
              fill
            />
            <div className="ml-2 mt-4 p-8">
              <p className="text-lg font-bold">John Doe</p>
              <p className="text-sm text-gray-500">12/12/2020</p>
            </div>
          </div>
          <div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
              Suivre
            </button>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-bold">Titre du sujet</h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            nemo, voluptates, quae, quos quidem doloribus quibusdam quia
            asperiores doloremque quod autem. Quisquam nemo, voluptates, quae,
            quos quidem doloribus quibusdam quia asperiores doloremque quod
            autem.
          </p>
        </div>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Voir plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default SujetComponent;
