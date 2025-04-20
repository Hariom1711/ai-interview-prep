// File: app/api/test/route.ts
export async function POST(request: Request) {
    try {
      // Log method and headers
      console.log("Request method:", request.method);
      console.log("Request headers:", Object.fromEntries(request.headers));
      
      // Try to get the raw text first
      const requestClone = request.clone();
      const rawText = await requestClone.text();
      console.log("Raw request body text:", rawText);
      
      // Check if there's any text in the body
      if (!rawText || rawText.trim() === '') {
        console.log("Empty request body detected");
        return Response.json({ 
          success: false, 
          message: "Received empty request body" 
        }, { status: 400 });
      }
      
      // Only try to parse JSON if we have content
      let parsedBody;
      try {
        parsedBody = JSON.parse(rawText);
        console.log("Successfully parsed JSON body:", parsedBody);
      } catch (jsonError) {
        console.log("Failed to parse JSON:", jsonError);
        return Response.json({ 
          success: false, 
          message: "Invalid JSON format",
          receivedText: rawText
        }, { status: 400 });
      }
      
      // Return the parsed data as confirmation
      return Response.json({ 
        success: true, 
        message: "Request received successfully",
        receivedData: parsedBody
      }, { status: 200 });
      
    } catch (error) {
      console.error("Unexpected error in test POST handler:", error);
      return Response.json({ 
        success: false, 
        message: "Server error processing request",
        error: error instanceof Error ? error.message : String(error)
      }, { status: 500 });
    }
  }
  
  // Simple GET method for testing if the endpoint is accessible
  export async function GET() {
    return Response.json({ 
      success: true, 
      message: "Test endpoint is working. Send a POST request to test data handling."
    }, { status: 200 });
  }