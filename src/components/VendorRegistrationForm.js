import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight, ArrowLeft, Building2, User, FileText, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';

const VendorRegistrationForm = ({ onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm();

  const steps = [
    { id: 1, title: 'Company Information', icon: Building2 },
    { id: 2, title: 'Contact Details', icon: User },
    { id: 3, title: 'Business Category', icon: FileText },
    { id: 4, title: 'Review & Submit', icon: Check },
  ];

  const businessCategories = [
    'Manufacturing', 'Technology', 'Services', 'Retail',
    'Healthcare', 'Education', 'Finance', 'Other',
  ];

  const onSubmit = (data) => {
    if (currentStep < 4) {
      setFormData({ ...formData, ...data });
      setCurrentStep(currentStep + 1);
    } else {
      const finalData = { ...formData, ...data };
      console.log('Final submission:', finalData);
      toast({
        title: "Registration Successful!",
        description: "Your vendor registration has been submitted for review.",
      });
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="companyName">Company Name *</Label>
              <Input
                id="companyName"
                {...register('companyName', { required: 'Company name is required' })}
                className="mt-1"
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="registrationNumber">Registration Number *</Label>
              <Input
                id="registrationNumber"
                {...register('registrationNumber', { required: 'Registration number is required' })}
                className="mt-1"
              />
              {errors.registrationNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.registrationNumber.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="companyAddress">Company Address *</Label>
              <Textarea
                id="companyAddress"
                {...register('companyAddress', { required: 'Company address is required' })}
                className="mt-1"
                rows={3}
              />
              {errors.companyAddress && (
                <p className="text-red-500 text-sm mt-1">{errors.companyAddress.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  {...register('city', { required: 'City is required' })}
                  className="mt-1"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  {...register('pincode', { required: 'Pincode is required' })}
                  className="mt-1"
                />
                {errors.pincode && (
                  <p className="text-red-500 text-sm mt-1">{errors.pincode.message}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="contactPerson">Contact Person Name *</Label>
              <Input
                id="contactPerson"
                {...register('contactPerson', { required: 'Contact person name is required' })}
                className="mt-1"
              />
              {errors.contactPerson && (
                <p className="text-red-500 text-sm mt-1">{errors.contactPerson.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
                className="mt-1"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone', { required: 'Phone number is required' })}
                className="mt-1"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="designation">Designation *</Label>
              <Input
                id="designation"
                {...register('designation', { required: 'Designation is required' })}
                className="mt-1"
              />
              {errors.designation && (
                <p className="text-red-500 text-sm mt-1">{errors.designation.message}</p>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="businessCategory">Business Category *</Label>
              <Select onValueChange={(value) => setValue('businessCategory', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select business category" />
                </SelectTrigger>
                <SelectContent>
                  {businessCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="businessDescription">Business Description *</Label>
              <Textarea
                id="businessDescription"
                {...register('businessDescription', { required: 'Business description is required' })}
                className="mt-1"
                rows={4}
              />
              {errors.businessDescription && (
                <p className="text-red-500 text-sm mt-1">{errors.businessDescription.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="yearsInBusiness">Years in Business *</Label>
              <Input
                id="yearsInBusiness"
                type="number"
                {...register('yearsInBusiness', { required: 'Years in business is required' })}
                className="mt-1"
              />
              {errors.yearsInBusiness && (
                <p className="text-red-500 text-sm mt-1">{errors.yearsInBusiness.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="website">Website URL</Label>
              <Input
                id="website"
                type="url"
                {...register('website')}
                className="mt-1"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Registration Summary</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Company:</strong> {watch('companyName')}</p>
                <p><strong>Contact Person:</strong> {watch('contactPerson')}</p>
                <p><strong>Email:</strong> {watch('email')}</p>
                <p><strong>Phone:</strong> {watch('phone')}</p>
                <p><strong>Business Category:</strong> {watch('businessCategory')}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" {...register('terms', { required: 'You must accept the terms and conditions' })} />
              <Label htmlFor="terms" className="text-sm">
                I agree to the Terms and Conditions and Privacy Policy *
              </Label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm">{errors.terms.message}</p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;

            return (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  isCompleted
                    ? 'bg-green-500 text-white'
                    : isActive
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-2 ${
                    isCompleted ? 'bg-green-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold">{steps[currentStep - 1].title}</h2>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Vendor Registration</CardTitle>
          <CardDescription>Step {currentStep} of {steps.length}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            {renderStepContent()}

            <div className="flex justify-between mt-8">
              <Button type="button" variant="outline" onClick={handlePrevious}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {currentStep === 1 ? 'Back to Role Selection' : 'Previous'}
              </Button>
              <Button type="submit">
                {currentStep === 4 ? 'Submit Registration' : 'Next'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorRegistrationForm;
