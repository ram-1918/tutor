# Generated by Django 4.1.7 on 2023-03-14 20:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tutor', '0002_alter_tutormodel_category_alter_tutormodel_company_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tutormodel',
            name='category',
            field=models.CharField(blank=True, choices=[('python', 'Python'), ('java', 'Java'), ('sql', 'SQL'), ('web', 'WEB Technologies'), ('pyspark', 'PySpark'), ('others', 'Others')], max_length=255),
        ),
    ]
