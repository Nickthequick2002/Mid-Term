# Generated by Django 5.0.6 on 2024-07-20 08:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('shop', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=100, unique=True)),
                ('full_name', models.CharField(max_length=100)),
                ('is_admin', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('is_manager', models.BooleanField(default=False)),
                ('likes', models.ManyToManyField(blank=True, related_name='likes', to='shop.product')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
