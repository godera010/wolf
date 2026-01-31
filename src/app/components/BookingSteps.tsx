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
      <div className="relative mb-6">
        <div className="absolute top-3.5 left-0 right-0 h-[1.5px] bg-gray-200 rounded-full hidden md:block" style={{ zIndex: 0 }} />
        <div
          className="absolute top-3.5 left-0 h-[1.5px] rounded-full hidden md:block transition-all duration-500"
          style={{
            width: `${(currentStep * 20) - 10}%`,
            background: 'linear-gradient(90deg, #01257D 0%, #E96F30 100%)',
            zIndex: 0
          }}
        />

        {/* Steps */}
        <div className="grid grid-cols-5 gap-2 md:gap-0">
          {steps.map((step) => {
            const isActive = step.number === Math.floor(currentStep);
            const isCompleted = step.number < Math.floor(currentStep);

            return (
              <div key={step.number} className="flex flex-col items-center" style={{ zIndex: 1 }}>
                {/* Step Circle */}
                <div
                  className={clsx(
                    'relative flex items-center justify-center w-7 h-7 rounded-full border-[1.5px] transition-all duration-300',
                    isCompleted && 'bg-[#01257d] border-[#01257d]',
                    isActive && 'bg-white border-[#e96f30] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]',
                    !isActive && !isCompleted && 'bg-white border-gray-300'
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  ) : (
                    <span
                      className={clsx(
                        'font-["Montserrat",sans-serif] font-light text-[13px]',
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
                    'mt-1.5 font-["Montserrat",sans-serif] text-[8px] md:text-[11px] text-center',
                    isActive && 'text-[#01257d] font-semibold',
                    !isActive && 'text-gray-400'
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
