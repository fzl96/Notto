import { useParams } from "react-router-dom";
import { useNotesContext } from "./context/NotesContext";
import type { NoteType } from "../../../utils/types";
import { format } from "date-fns";

const NoteId = () => {
  const notes: NoteType[] = useNotesContext();
  const { id } = useParams();
  const currentNote: NoteType | undefined = notes.find(
    (note: NoteType) => note.id === id
  );
  let createdAt;
  const noteDate: Date = currentNote && currentNote.createdAt.toDate();

  if (noteDate) {
    createdAt = format(noteDate, "MMM dd");
  }
  return (
    <div className="lg:p-20 h-full w-full bg-white rounded-2xl shadow-lg">
      <p>title: {currentNote?.title}</p>
      <p>Body: {currentNote?.body}</p>
      <p>Created at: {createdAt && createdAt}</p>
    </div>
  );
};

export default NoteId;
