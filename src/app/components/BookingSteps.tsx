import clsx from 'clsx';
import { Check } from 'lucide-react';

interface BookingStepsProps {
  currentStep: number;
}

const steps = [
  { number: 1, label: 'Search' },
  { number: 2, label: 'Seat' },
  { number: 3, label: 'Passenger Info' },
  { number: 4, label: 'Payment' },
  { number: 5, label: 'Confirm' },
];

export default function BookingSteps({ currentStep }: BookingStepsProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Progress Line */}
      <div className="relative mb-8">
        <div className="absolute top-5 left-0 right-0 h-[3px] bg-gray-200 rounded-full hidden md:block" style={{ zIndex: 0 }} />
        <div 
          className="absolute top-5 left-0 h-[3px] rounded-full hidden md:block transition-all duration-500" 
          style={{ 
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            background: 'linear-gradient(90deg, #01257D 0%, #E96F30 100%)',
            zIndex: 0
          }} 
        />
        
        {/* Steps */}
        <div className="grid grid-cols-5 gap-2 md:gap-0">
          {steps.map((step, index) => {
            const isActive = step.number === currentStep;
            const isCompleted = step.number < currentStep;
            
            return (
              <div key={step.number} className="flex flex-col items-center" style={{ zIndex: 1 }}>
                {/* Step Circle */}
                <div 
                  className={clsx(
                    'relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300',
                    isCompleted && 'bg-[#01257d] border-[#01257d]',
                    isActive && 'bg-white border-[#e96f30] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]',
                    !isActive && !isCompleted && 'bg-white border-gray-300'
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  ) : (
                    <span 
                      className={clsx(
                        'font-["Montserrat",sans-serif] font-light text-xl',
                        isActive && 'text-[#01257d]',
                        !isActive && 'text-gray-400'
                      )}
                    >
                      {step.number}
                    </span>
                  )}
                </div>
                
                {/* Step Label */}
                <span 
                  className={clsx(
                    'mt-2 font-["Montserrat",sans-serif] text-[10px] md:text-sm text-center',
                    isActive && 'text-[#01257d] font-medium',
                    !isActive && 'text-gray-500'
                  )}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
