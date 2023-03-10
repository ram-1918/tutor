# Generated by Django 4.1.7 on 2023-03-10 02:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="TutorModel",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("question", models.TextField()),
                ("answer", models.TextField(blank=True)),
                ("date_create", models.DateField(auto_now=True)),
                ("category", models.CharField(default="-", max_length=255)),
                ("topic", models.CharField(blank=True, max_length=255)),
                ("student_name", models.CharField(blank=True, max_length=255)),
                ("company", models.CharField(max_length=255)),
                ("links", models.URLField(blank=True, max_length=255)),
            ],
            options={
                "verbose_name_plural": "TutorModel",
            },
        ),
    ]
