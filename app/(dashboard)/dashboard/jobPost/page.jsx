import SubHeader from "@/app/(website)/components/Subheader/Subheader";
import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import Table from "../../components/Table";
import Dragdrop from "../../components/Dragdrop";

export default function Job_Category() {
  return (
    <div className="flex flex-col w-full gap-10">
      <div className="text-white p-5 w-full">
        <div className="bg-secondary w-full p-5 rounded-md">
          <SubHeader>Add Job</SubHeader>
          <div className="mt-10">
            <form className="space-y-3">
              <div>
                <FormElements.Label withAsterisk>Job Name</FormElements.Label>
                <FormElements.Input />
              </div>
              <div>
                <FormElements.Label withAsterisk>
                  Description
                </FormElements.Label>
                <FormElements.Input />
              </div>
              <div>
                <FormElements.Label withAsterisk>Icon</FormElements.Label>
                {/* <FormElements.FileInput>Choose Icon</FormElements.FileInput> */}

                <Dragdrop className="w-64 h-64" />
              </div>
              <div className="flex gap-5 items-center">
                <Button>SAVE</Button>
                <Button variant="denger">CANCEL</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <SubHeader className="text-white">Job Category</SubHeader>
        <Table />
      </div>
    </div>
  );
}