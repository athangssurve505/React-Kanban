
import "./textarea.css"
function TextArea() {
  

  return (
    <div className="text-area-group">
      <label htmlFor="description">Description</label>

      <textarea
        id="description"
    
        placeholder="Add details about this task..."
        rows={4}
      />

      
    </div>
  );
}

export default TextArea;