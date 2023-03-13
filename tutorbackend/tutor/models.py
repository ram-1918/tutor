from django.db import models

# Create your models here.

class TutorModel(models.Model):
    options = [('python', 'Python'),('java', 'Java'),('sql', 'SQL'),('web', 'WEB'),('others', 'Others')]
    question = models.TextField()
    answer = models.TextField(blank = True)
    date_create = models.DateField(auto_now = True)
    category = models.CharField(max_length = 255, choices=options, blank = True)
    topic = models.CharField(max_length = 255, blank = True)
    student_name = models.CharField(max_length = 255, blank = True)
    company= models.CharField(max_length = 255, blank = True)
    links = models.CharField(max_length = 255, blank = True)

    def __str__(self):
        return self.question[:10]+'...'
    
    class Meta:
        verbose_name_plural = 'TutorModel'