
import "./textarea.css"
function TextArea({...props}) {
  

  return (
    <div className="text-area-group">
      <label htmlFor="description">Description</label>

      <textarea
        id="description"

        placeholder="Add details about this task..."
        rows={4}
        {...props}
      />

      
    </div>
  );
}

export default TextArea;