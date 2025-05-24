'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type Innovator, getFieldColor, getInnovatorInitials } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Send } from "lucide-react";

interface InnovatorDialogProps {
  innovator: Innovator | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InnovatorDialog({ innovator, open, onOpenChange }: InnovatorDialogProps) {
  const [customQuestion, setCustomQuestion] = useState("");

  if (!innovator) return null;

  const handleQuestionSubmit = (question: string) => {
    if (!question.trim()) return;
    
    // In a real app, this would call an AI API
    console.log(`Question about ${innovator.name}: ${question}`);
    setCustomQuestion("");
    
    // Show a simple response (in production, this would be an AI response)
    alert(`Great question about ${innovator.name}! In a full implementation, this would provide an AI-generated response about "${question}"`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              {getInnovatorInitials(innovator.name)}
            </div>
            <div>
              <DialogTitle className="text-2xl md:text-3xl gradient-text">
                {innovator.name}
              </DialogTitle>
              <p className="text-muted-foreground text-lg">{innovator.years}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Fields */}
          <div>
            <h3 className="font-semibold mb-2">Fields of Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {innovator.fields.map((field) => (
                <Badge 
                  key={field} 
                  className={cn("text-sm", getFieldColor(field))}
                >
                  {field}
                </Badge>
              ))}
            </div>
          </div>

          {/* Biography */}
          <div>
            <h3 className="font-semibold mb-2">Biography</h3>
            <p className="text-muted-foreground leading-relaxed">
              {innovator.detailedDescription}
            </p>
          </div>

          {/* Key Inventions */}
          <div>
            <h3 className="font-semibold mb-3">Key Contributions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {innovator.inventions.map((invention) => (
                <div key={invention} className="p-3 rounded-lg border bg-card">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getInventionEmoji(invention)}</span>
                    <span className="font-medium text-sm">{invention}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Questions Section */}
          <div>
            <h3 className="font-semibold mb-3">Explore Further</h3>
            <div className="space-y-3">
              {/* Suggested Questions */}
              <div className="grid grid-cols-1 gap-2">
                {innovator.questions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="text-left h-auto p-3 justify-start"
                    onClick={() => handleQuestionSubmit(question)}
                  >
                    <span className="text-sm">{question}</span>
                  </Button>
                ))}
              </div>

              {/* Custom Question Input */}
              <div className="flex gap-2 pt-2">
                <Input
                  placeholder="Ask your own question..."
                  value={customQuestion}
                  onChange={(e) => setCustomQuestion(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleQuestionSubmit(customQuestion);
                    }
                  }}
                  className="flex-1"
                />
                <Button 
                  onClick={() => handleQuestionSubmit(customQuestion)}
                  size="icon"
                  disabled={!customQuestion.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function getInventionEmoji(invention: string): string {
  const emojiMap: Record<string, string> = {
    'Water-Raising Machines': '💧',
    'Camera Obscura': '📷',
    'Surgical Instruments': '🔬',
    'Algebra': '📐',
    'Flying Machine': '✈️',
    'University Education System': '🎓',
    'Mechanical Clock Designs': '⏰',
    'Automated Devices': '🤖',
    'Experimental Scientific Method': '🧪',
    'Optics Research': '🔍',
    'Algorithm': '💻',
    'Decimal Positional Number System': '🔢',
    'Canon of Medicine': '📚',
    'Medical Diagnosis Methods': '🩺',
    'Pharmaceutical Knowledge': '💊',
    'Catgut Sutures': '🧵',
    'Surgical Procedures': '⚕️',
    'Higher Learning Institution': '🏛️',
    'Educational Philanthropy': '📖',
    'Crystal Cutting Techniques': '💎',
    'Planetarium Design': '🌟',
  };
  
  return emojiMap[invention] || '⚡';
}